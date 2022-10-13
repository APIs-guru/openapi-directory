from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import plan
from . import contacttype_enum


@dataclass_json
@dataclass
class GetContactResult:
    alias: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Alias' }})
    contact_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactArn' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    plan: plan.Plan = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Plan' }})
    type: contacttype_enum.ContactTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
