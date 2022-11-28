from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UploadSummary:
    r"""UploadSummary
    This container provides summary information on an upload feed (not applicable for download feed types).
    """
    
    failure_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCount') }})
    success_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successCount') }})
    
