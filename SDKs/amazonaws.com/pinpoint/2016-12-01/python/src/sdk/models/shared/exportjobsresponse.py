from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExportJobsResponse:
    r"""ExportJobsResponse
    Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
    """
    
    item: List[ExportJobResponse] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
