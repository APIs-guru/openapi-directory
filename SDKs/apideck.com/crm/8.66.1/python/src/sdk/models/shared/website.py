from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WebsiteTypeEnum(str, Enum):
    PRIMARY = "primary"
    SECONDARY = "secondary"
    WORK = "work"
    PERSONAL = "personal"
    OTHER = "other"


@dataclass_json
@dataclass
class Website:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[WebsiteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
