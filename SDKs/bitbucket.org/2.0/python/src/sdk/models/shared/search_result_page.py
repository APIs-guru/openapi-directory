from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchResultPage:
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pagelen: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagelen') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    query_substituted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query_substituted') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    values: Optional[List[SearchCodeSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
