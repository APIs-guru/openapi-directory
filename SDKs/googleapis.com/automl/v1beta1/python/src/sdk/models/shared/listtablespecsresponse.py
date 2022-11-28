from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTableSpecsResponse:
    r"""ListTableSpecsResponse
    Response message for AutoMl.ListTableSpecs.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    table_specs: Optional[List[TableSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableSpecs') }})
    
