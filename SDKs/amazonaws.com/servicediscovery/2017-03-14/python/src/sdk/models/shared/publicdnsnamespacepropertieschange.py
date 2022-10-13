from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import publicdnspropertiesmutablechange


@dataclass_json
@dataclass
class PublicDNSNamespacePropertiesChange:
    dns_properties: publicdnspropertiesmutablechange.PublicDNSPropertiesMutableChange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsProperties' }})
    
