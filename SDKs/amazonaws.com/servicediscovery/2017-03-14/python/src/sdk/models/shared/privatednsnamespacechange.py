from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import privatednsnamespacepropertieschange


@dataclass_json
@dataclass
class PrivateDNSNamespaceChange:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    properties: Optional[privatednsnamespacepropertieschange.PrivateDNSNamespacePropertiesChange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Properties' }})
    
