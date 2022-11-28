from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetaCursors:
    r"""MetaCursors
    Cursors to navigate to previous or next pages through the API
    """
    
    current: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass_json
@dataclass
class Meta:
    r"""Meta
    Response metadata
    """
    
    cursors: Optional[MetaCursors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursors') }})
    items_on_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items_on_page') }})
    
