from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objectexpiration


@dataclass_json
@dataclass
class UpdateUploadSharesBulkRequest:
    expiration: Optional[objectexpiration.ObjectExpiration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    files_expiry_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesExpiryPeriod' }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSize' }})
    max_slots: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSlots' }})
    object_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectIds' }})
    reset_files_expiry_period: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetFilesExpiryPeriod' }})
    reset_max_size: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetMaxSize' }})
    reset_max_slots: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetMaxSlots' }})
    show_creator_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCreatorName' }})
    show_creator_username: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCreatorUsername' }})
    show_uploaded_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showUploadedFiles' }})
    
