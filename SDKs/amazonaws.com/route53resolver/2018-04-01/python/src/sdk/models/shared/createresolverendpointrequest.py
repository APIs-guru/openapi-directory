from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateResolverEndpointRequest:
    creator_request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    direction: ResolverEndpointDirectionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Direction') }})
    ip_addresses: List[IPAddressRequest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddresses') }})
    security_group_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
