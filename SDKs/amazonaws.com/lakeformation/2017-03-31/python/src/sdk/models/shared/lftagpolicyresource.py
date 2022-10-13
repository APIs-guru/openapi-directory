from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lftag
from . import resourcetype_enum


@dataclass_json
@dataclass
class LfTagPolicyResource:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    expression: List[lftag.LfTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expression' }})
    resource_type: resourcetype_enum.ResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    
