from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objectexpiration


@dataclass_json
@dataclass
class UpdateDownloadSharesBulkRequest:
    expiration: Optional[objectexpiration.ObjectExpiration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    max_downloads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDownloads' }})
    object_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectIds' }})
    reset_max_downloads: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetMaxDownloads' }})
    show_creator_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCreatorName' }})
    show_creator_username: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCreatorUsername' }})
    
