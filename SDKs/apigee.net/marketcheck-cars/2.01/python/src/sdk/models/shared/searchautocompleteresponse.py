from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SearchAutoCompleteResponseTerms:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    item: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    

@dataclass_json
@dataclass
class SearchAutoCompleteResponse:
    r"""SearchAutoCompleteResponse
    Search auto complete query response
    """
    
    terms: Optional[List[SearchAutoCompleteResponseTerms]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    
