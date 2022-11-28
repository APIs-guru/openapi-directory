from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateResolverRuleRequest:
    creator_request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    rule_type: RuleTypeOptionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    resolver_endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverEndpointId') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    target_ips: Optional[List[TargetAddress]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetIps') }})
    
