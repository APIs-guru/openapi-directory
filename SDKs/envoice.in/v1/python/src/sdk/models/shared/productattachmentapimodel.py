from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ProductAttachmentAPIModelTypeEnum(str, Enum):
    EXTERNAL = "External"
    UPLOADED = "Uploaded"


@dataclass_json
@dataclass
class ProductAttachmentAPIModel:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Link' }})
    obfuscated_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObfuscatedFileName' }})
    original_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OriginalFileName' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    type: Optional[ProductAttachmentAPIModelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
