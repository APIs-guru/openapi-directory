from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FailureInfo:
    r"""FailureInfo
    An object that contains the failure details about an import job.
    """
    
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    failed_records_s3_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedRecordsS3Url') }})
    
