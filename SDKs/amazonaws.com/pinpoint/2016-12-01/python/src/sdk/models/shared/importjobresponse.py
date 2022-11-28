from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportJobResponse:
    r"""ImportJobResponse
    Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
    """
    
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    creation_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    definition: ImportJobResource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Definition') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    job_status: JobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    completed_pieces: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletedPieces') }})
    completion_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionDate') }})
    failed_pieces: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedPieces') }})
    failures: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Failures') }})
    total_failures: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalFailures') }})
    total_pieces: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalPieces') }})
    total_processed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalProcessed') }})
    
