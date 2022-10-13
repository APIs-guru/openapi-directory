from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateServerEngineAttributesRequest:
    attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeName' }})
    attribute_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeValue' }})
    server_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    
