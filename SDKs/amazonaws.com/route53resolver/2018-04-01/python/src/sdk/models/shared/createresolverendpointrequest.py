from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resolverendpointdirection_enum
from . import ipaddressrequest
from . import tag


@dataclass_json
@dataclass
class CreateResolverEndpointRequest:
    creator_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    direction: resolverendpointdirection_enum.ResolverEndpointDirectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Direction' }})
    ip_addresses: List[ipaddressrequest.IPAddressRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddresses' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    security_group_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
