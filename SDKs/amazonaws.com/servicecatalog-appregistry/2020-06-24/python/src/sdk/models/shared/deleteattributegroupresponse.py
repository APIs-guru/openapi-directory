from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributegroupsummary


@dataclass_json
@dataclass
class DeleteAttributeGroupResponse:
    attribute_group: Optional[attributegroupsummary.AttributeGroupSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeGroup' }})
    
