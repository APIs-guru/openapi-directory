from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import storageclass_enum


@dataclass_json
@dataclass
class PutObjectResponse:
    content_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentSHA256' }})
    e_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ETag' }})
    storage_class: Optional[storageclass_enum.StorageClassEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageClass' }})
    
