from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcesharetype_enum


@dataclass_json
@dataclass
class ListLfTagsRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_share_type: Optional[resourcesharetype_enum.ResourceShareTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceShareType' }})
    
