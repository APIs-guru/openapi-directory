from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDatasetsResponse:
    r"""ListDatasetsResponse
    Response message for AutoMl.ListDatasets.
    """
    
    datasets: Optional[List[Dataset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasets') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
