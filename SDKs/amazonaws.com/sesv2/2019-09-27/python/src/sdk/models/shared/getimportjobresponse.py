from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetImportJobResponse:
    r"""GetImportJobResponse
    An HTTP 200 response if the request succeeds, or an error message if the request fails.
    """
    
    completed_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletedTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failed_records_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedRecordsCount') }})
    failure_info: Optional[FailureInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureInfo') }})
    import_data_source: Optional[ImportDataSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportDataSource') }})
    import_destination: Optional[ImportDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportDestination') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    job_status: Optional[JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    processed_records_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessedRecordsCount') }})
    
