from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import organizationnodetype_enum


@dataclass_json
@dataclass
class OrganizationNode:
    type: Optional[organizationnodetype_enum.OrganizationNodeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
