from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchImportFindingsResponse:
    failed_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedCount') }})
    success_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessCount') }})
    failed_findings: Optional[List[ImportFindingsError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedFindings') }})
    
