from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resource


@dataclass_json
@dataclass
class GetResourceLfTagsRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    resource: resource.Resource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resource' }})
    show_assigned_lf_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShowAssignedLFTags' }})
    
