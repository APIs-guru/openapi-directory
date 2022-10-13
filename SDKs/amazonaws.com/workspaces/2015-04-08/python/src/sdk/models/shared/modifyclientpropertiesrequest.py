from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import clientproperties


@dataclass_json
@dataclass
class ModifyClientPropertiesRequest:
    client_properties: clientproperties.ClientProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientProperties' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    
