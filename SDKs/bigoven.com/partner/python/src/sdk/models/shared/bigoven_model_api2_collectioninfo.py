from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BigOvenModelApi2CollectionInfo:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ID') }})
    is_filtered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsFiltered') }})
    is_sponsored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsSponsored') }})
    mobile_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MobileUrl') }})
    pro: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PRO') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhotoUrl') }})
    results: Optional[List[BigOvenModelApi2RecipeInfox]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Token') }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebUrl') }})
    
