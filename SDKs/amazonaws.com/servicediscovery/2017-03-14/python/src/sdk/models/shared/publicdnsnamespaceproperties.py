from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import publicdnspropertiesmutable


@dataclass_json
@dataclass
class PublicDNSNamespaceProperties:
    dns_properties: publicdnspropertiesmutable.PublicDNSPropertiesMutable = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsProperties' }})
    
