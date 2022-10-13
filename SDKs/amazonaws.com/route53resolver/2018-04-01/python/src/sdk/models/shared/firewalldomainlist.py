from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import firewalldomainliststatus_enum


@dataclass_json
@dataclass
class FirewallDomainList:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime' }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    domain_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainCount' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    managed_owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManagedOwnerName' }})
    modification_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModificationTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[firewalldomainliststatus_enum.FirewallDomainListStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    
