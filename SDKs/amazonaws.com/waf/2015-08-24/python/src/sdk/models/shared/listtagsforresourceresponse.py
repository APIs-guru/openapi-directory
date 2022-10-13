from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import taginfoforresource


@dataclass_json
@dataclass
class ListTagsForResourceResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    tag_info_for_resource: Optional[taginfoforresource.TagInfoForResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagInfoForResource' }})
    
