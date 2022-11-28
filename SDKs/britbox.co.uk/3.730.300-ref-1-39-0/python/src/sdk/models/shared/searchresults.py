from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchResults:
    term: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('term') }})
    total: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    items: Optional[ItemList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    movies: Optional[ItemList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('movies') }})
    other: Optional[ItemList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other') }})
    people: Optional[List[Person]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('people') }})
    tv: Optional[ItemList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tv') }})
    
