from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ConnectorDocAudienceEnum(str, Enum):
    APPLICATION_OWNER = "application_owner"
    CONSUMER = "consumer"

class ConnectorDocFormatEnum(str, Enum):
    MARKDOWN = "markdown"


@dataclass_json
@dataclass
class ConnectorDoc:
    audience: Optional[ConnectorDocAudienceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audience' }})
    format: Optional[ConnectorDocFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
