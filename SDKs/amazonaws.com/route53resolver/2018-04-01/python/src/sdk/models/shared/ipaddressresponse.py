from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ipaddressstatus_enum


@dataclass_json
@dataclass
class IPAddressResponse:
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ip' }})
    ip_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpId' }})
    modification_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModificationTime' }})
    status: Optional[ipaddressstatus_enum.IPAddressStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    
