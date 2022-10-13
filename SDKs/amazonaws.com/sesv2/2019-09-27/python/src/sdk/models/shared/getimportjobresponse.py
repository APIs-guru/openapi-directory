from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import failureinfo
from . import importdatasource
from . import importdestination
from . import jobstatus_enum


@dataclass_json
@dataclass
class GetImportJobResponse:
    completed_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failed_records_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedRecordsCount' }})
    failure_info: Optional[failureinfo.FailureInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureInfo' }})
    import_data_source: Optional[importdatasource.ImportDataSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportDataSource' }})
    import_destination: Optional[importdestination.ImportDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportDestination' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    job_status: Optional[jobstatus_enum.JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    processed_records_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessedRecordsCount' }})
    
