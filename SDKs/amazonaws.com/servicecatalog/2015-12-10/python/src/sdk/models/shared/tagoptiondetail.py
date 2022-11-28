from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagOptionDetail:
    r"""TagOptionDetail
    Information about a TagOption.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Active') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
