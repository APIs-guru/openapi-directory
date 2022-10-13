from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attachmenthashtype_enum


@dataclass_json
@dataclass
class AttachmentContent:
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Hash' }})
    hash_type: Optional[attachmenthashtype_enum.AttachmentHashTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HashType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    
