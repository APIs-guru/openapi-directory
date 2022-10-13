from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import accesscontrolattributevalue


@dataclass_json
@dataclass
class AccessControlAttribute:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    value: accesscontrolattributevalue.AccessControlAttributeValue = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
