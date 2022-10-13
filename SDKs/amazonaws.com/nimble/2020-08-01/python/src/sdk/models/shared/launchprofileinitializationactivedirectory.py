from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import activedirectorycomputerattribute


@dataclass_json
@dataclass
class LaunchProfileInitializationActiveDirectory:
    computer_attributes: Optional[List[activedirectorycomputerattribute.ActiveDirectoryComputerAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computerAttributes' }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directoryId' }})
    directory_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directoryName' }})
    dns_ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsIpAddresses' }})
    organizational_unit_distinguished_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationalUnitDistinguishedName' }})
    studio_component_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioComponentId' }})
    studio_component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioComponentName' }})
    
