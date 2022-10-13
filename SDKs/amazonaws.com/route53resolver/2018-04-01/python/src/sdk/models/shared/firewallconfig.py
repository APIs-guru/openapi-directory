from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import firewallfailopenstatus_enum


@dataclass_json
@dataclass
class FirewallConfig:
    firewall_fail_open: Optional[firewallfailopenstatus_enum.FirewallFailOpenStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallFailOpen' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    
