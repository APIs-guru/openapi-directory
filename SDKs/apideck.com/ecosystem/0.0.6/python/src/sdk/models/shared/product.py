from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import file
from . import translation


@dataclass_json
@dataclass
class Product:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    logo: Optional[file.File] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequence' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    translations: Optional[List[translation.Translation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translations' }})
    visible: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visible' }})
    
