from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import ipaddresstype_enum
from . import resourcetype_enum


@dataclass_json
@dataclass
class SetIPAddressTypeRequest:
    ip_address_type: ipaddresstype_enum.IPAddressTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddressType' }})
    resource_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    resource_type: resourcetype_enum.ResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
