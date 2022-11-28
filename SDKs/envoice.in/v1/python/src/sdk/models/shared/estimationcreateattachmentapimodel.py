from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EstimationCreateAttachmentAPIModelTypeEnum(str, Enum):
    EXTERNAL = "External"
    UPLOADED = "Uploaded"


@dataclass_json
@dataclass
class EstimationCreateAttachmentAPIModel:
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Link') }})
    obfuscated_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObfuscatedFileName') }})
    original_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginalFileName') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    type: Optional[EstimationCreateAttachmentAPIModelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
