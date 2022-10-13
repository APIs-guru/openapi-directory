from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lftagpair
from . import resource


@dataclass_json
@dataclass
class AddLfTagsToResourceRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    lf_tags: List[lftagpair.LfTagPair] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LFTags' }})
    resource: resource.Resource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resource' }})
    
