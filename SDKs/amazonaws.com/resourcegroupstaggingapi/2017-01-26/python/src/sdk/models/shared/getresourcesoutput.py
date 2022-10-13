from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcetagmapping


@dataclass_json
@dataclass
class GetResourcesOutput:
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaginationToken' }})
    resource_tag_mapping_list: Optional[List[resourcetagmapping.ResourceTagMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceTagMappingList' }})
    
