from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributegroup


@dataclass_json
@dataclass
class CreateAttributeGroupResponse:
    attribute_group: Optional[attributegroup.AttributeGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeGroup' }})
    
