from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import principaltype_enum


@dataclass_json
@dataclass
class Principal:
    principal_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalARN' }})
    principal_type: Optional[principaltype_enum.PrincipalTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalType' }})
    
