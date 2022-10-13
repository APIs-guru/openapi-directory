from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import resourcetype_enum


@dataclass_json
@dataclass
class CreateResourceRequest:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    type: resourcetype_enum.ResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
