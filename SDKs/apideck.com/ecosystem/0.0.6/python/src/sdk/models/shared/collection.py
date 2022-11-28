from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Collection:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    visible: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    card_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_background_color') }})
    card_background_image: Optional[File] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_background_image') }})
    card_columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_columns') }})
    card_style: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_style') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hidden_from_homepage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden_from_homepage') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    logo: Optional[File] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence') }})
    show_max_items_homepage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_max_items_homepage') }})
    translations: Optional[List[Translation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    
