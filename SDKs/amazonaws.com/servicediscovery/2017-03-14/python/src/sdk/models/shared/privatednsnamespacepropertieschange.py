from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import privatednspropertiesmutablechange


@dataclass_json
@dataclass
class PrivateDNSNamespacePropertiesChange:
    dns_properties: privatednspropertiesmutablechange.PrivateDNSPropertiesMutableChange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsProperties' }})
    
