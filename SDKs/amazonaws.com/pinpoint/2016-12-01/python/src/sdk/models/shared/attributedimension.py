from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attributetype_enum


@dataclass_json
@dataclass
class AttributeDimension:
    attribute_type: Optional[attributetype_enum.AttributeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeType' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
