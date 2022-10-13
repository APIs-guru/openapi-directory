from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dnsproperties
from . import httpproperties


@dataclass_json
@dataclass
class NamespaceProperties:
    dns_properties: Optional[dnsproperties.DNSProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsProperties' }})
    http_properties: Optional[httpproperties.HTTPProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpProperties' }})
    
