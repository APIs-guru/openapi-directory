from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import imagetype_enum


@dataclass_json
@dataclass
class DescribeWorkspaceImagesRequest:
    image_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageIds' }})
    image_type: Optional[imagetype_enum.ImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageType' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
