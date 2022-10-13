from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import publicdnsnamespacepropertieschange


@dataclass_json
@dataclass
class PublicDNSNamespaceChange:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    properties: Optional[publicdnsnamespacepropertieschange.PublicDNSNamespacePropertiesChange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Properties' }})
    
