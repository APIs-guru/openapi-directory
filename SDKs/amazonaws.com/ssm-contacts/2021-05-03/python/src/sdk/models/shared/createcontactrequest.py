from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import plan
from . import tag
from . import contacttype_enum


@dataclass_json
@dataclass
class CreateContactRequest:
    alias: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Alias' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    plan: plan.Plan = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Plan' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    type: contacttype_enum.ContactTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
