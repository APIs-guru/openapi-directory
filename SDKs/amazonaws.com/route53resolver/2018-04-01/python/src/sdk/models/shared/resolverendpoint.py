from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resolverendpointdirection_enum
from . import resolverendpointstatus_enum


@dataclass_json
@dataclass
class ResolverEndpoint:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime' }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    direction: Optional[resolverendpointdirection_enum.ResolverEndpointDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Direction' }})
    host_vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostVPCId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    ip_address_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddressCount' }})
    modification_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModificationTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    status: Optional[resolverendpointstatus_enum.ResolverEndpointStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    
