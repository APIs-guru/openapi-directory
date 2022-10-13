from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ingestioninputconfiguration
from . import ingestionjobstatus_enum


@dataclass_json
@dataclass
class DescribeDataIngestionJobResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetArn' }})
    failed_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedReason' }})
    ingestion_input_configuration: Optional[ingestioninputconfiguration.IngestionInputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IngestionInputConfiguration' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    status: Optional[ingestionjobstatus_enum.IngestionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
