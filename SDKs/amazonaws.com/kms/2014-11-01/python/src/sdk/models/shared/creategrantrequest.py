from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import grantconstraints
from . import grantoperation_enum


@dataclass_json
@dataclass
class CreateGrantRequest:
    constraints: Optional[grantconstraints.GrantConstraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Constraints' }})
    grant_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantTokens' }})
    grantee_principal: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GranteePrincipal' }})
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    operations: List[grantoperation_enum.GrantOperationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operations' }})
    retiring_principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetiringPrincipal' }})
    
