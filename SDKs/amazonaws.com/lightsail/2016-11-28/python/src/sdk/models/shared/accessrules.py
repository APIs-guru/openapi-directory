from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import accesstype_enum


@dataclass_json
@dataclass
class AccessRules:
    allow_public_overrides: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowPublicOverrides' }})
    get_object: Optional[accesstype_enum.AccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'getObject' }})
    
