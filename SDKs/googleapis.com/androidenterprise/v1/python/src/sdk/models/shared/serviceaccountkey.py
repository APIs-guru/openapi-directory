from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ServiceAccountKeyTypeEnum(str, Enum):
    GOOGLE_CREDENTIALS = "googleCredentials"
    PKCS12 = "pkcs12"


@dataclass_json
@dataclass
class ServiceAccountKey:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    public_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicData' }})
    type: Optional[ServiceAccountKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
