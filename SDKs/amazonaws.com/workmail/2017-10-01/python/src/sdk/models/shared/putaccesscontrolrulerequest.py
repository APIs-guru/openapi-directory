from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutAccessControlRuleRequest:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    effect: AccessControlRuleEffectEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Effect') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    organization_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    ip_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpRanges') }})
    not_actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotActions') }})
    not_ip_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotIpRanges') }})
    not_user_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotUserIds') }})
    user_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserIds') }})
    
