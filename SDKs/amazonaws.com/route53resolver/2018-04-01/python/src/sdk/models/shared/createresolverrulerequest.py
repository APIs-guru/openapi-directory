from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ruletypeoption_enum
from . import tag
from . import targetaddress


@dataclass_json
@dataclass
class CreateResolverRuleRequest:
    creator_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    resolver_endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverEndpointId' }})
    rule_type: ruletypeoption_enum.RuleTypeOptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleType' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    target_ips: Optional[List[targetaddress.TargetAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetIps' }})
    
