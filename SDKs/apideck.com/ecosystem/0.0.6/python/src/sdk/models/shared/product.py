from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Product:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    visible: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    logo: Optional[File] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence') }})
    translations: Optional[List[Translation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    
