from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import tag
from . import parametertier_enum
from . import parametertype_enum


@dataclass_json
@dataclass
class PutParameterRequest:
    allowed_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedPattern' }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    overwrite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Overwrite' }})
    policies: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policies' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    tier: Optional[parametertier_enum.ParameterTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tier' }})
    type: Optional[parametertype_enum.ParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
