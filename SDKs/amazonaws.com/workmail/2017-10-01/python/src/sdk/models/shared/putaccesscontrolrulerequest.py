from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accesscontrolruleeffect_enum


@dataclass_json
@dataclass
class PutAccessControlRuleRequest:
    actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    effect: accesscontrolruleeffect_enum.AccessControlRuleEffectEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Effect' }})
    ip_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpRanges' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    not_actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotActions' }})
    not_ip_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotIpRanges' }})
    not_user_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotUserIds' }})
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    user_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserIds' }})
    
