from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import settingmetadata

class SenderFormatEnum(str, Enum):
    CSV = "CSV"


@dataclass_json
@dataclass
class Sender:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    format: SenderFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    meta: Optional[settingmetadata.SettingMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationName' }})
    schema: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    topic: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    
