from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resolverruleassociationstatus_enum


@dataclass_json
@dataclass
class ResolverRuleAssociation:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    resolver_rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverRuleId' }})
    status: Optional[resolverruleassociationstatus_enum.ResolverRuleAssociationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VPCId' }})
    
