from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LabelSearchResultItem:
    r"""LabelSearchResultItem
    Label Search Result Item
    """
    
    color: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    default: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    score: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    text_matches: Optional[List[SearchResultTextMatches]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_matches') }})
    
