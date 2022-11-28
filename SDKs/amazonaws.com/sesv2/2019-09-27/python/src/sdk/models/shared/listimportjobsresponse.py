from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListImportJobsResponse:
    r"""ListImportJobsResponse
    An HTTP 200 response if the request succeeds, or an error message if the request fails.
    """
    
    import_jobs: Optional[List[ImportJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportJobs') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
