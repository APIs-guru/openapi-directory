from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTransferRunsResponse:
    r"""ListTransferRunsResponse
    The returned list of pipelines in the project.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    transfer_runs: Optional[List[TransferRun]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferRuns') }})
    
