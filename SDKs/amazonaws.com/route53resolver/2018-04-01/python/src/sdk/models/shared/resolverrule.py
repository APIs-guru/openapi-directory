from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ruletypeoption_enum
from . import sharestatus_enum
from . import resolverrulestatus_enum
from . import targetaddress


@dataclass_json
@dataclass
class ResolverRule:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime' }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    modification_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModificationTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    resolver_endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverEndpointId' }})
    rule_type: Optional[ruletypeoption_enum.RuleTypeOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleType' }})
    share_status: Optional[sharestatus_enum.ShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareStatus' }})
    status: Optional[resolverrulestatus_enum.ResolverRuleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    target_ips: Optional[List[targetaddress.TargetAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetIps' }})
    
