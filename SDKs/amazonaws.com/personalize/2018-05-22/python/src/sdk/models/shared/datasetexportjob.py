from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ingestionmode_enum
from . import datasetexportjoboutput


@dataclass_json
@dataclass
class DatasetExportJob:
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetArn' }})
    dataset_export_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetExportJobArn' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    ingestion_mode: Optional[ingestionmode_enum.IngestionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingestionMode' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobName' }})
    job_output: Optional[datasetexportjoboutput.DatasetExportJobOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobOutput' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
