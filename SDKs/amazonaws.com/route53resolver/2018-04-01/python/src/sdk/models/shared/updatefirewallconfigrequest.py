from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import firewallfailopenstatus_enum


@dataclass_json
@dataclass
class UpdateFirewallConfigRequest:
    firewall_fail_open: firewallfailopenstatus_enum.FirewallFailOpenStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallFailOpen' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    
