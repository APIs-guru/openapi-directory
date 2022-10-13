from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import privatednspropertiesmutable


@dataclass_json
@dataclass
class PrivateDNSNamespaceProperties:
    dns_properties: privatednspropertiesmutable.PrivateDNSPropertiesMutable = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsProperties' }})
    
