from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import uploadbehavior_enum


@dataclass_json
@dataclass
class UploadConfiguration:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    upload_behavior: uploadbehavior_enum.UploadBehaviorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadBehavior' }})
    
