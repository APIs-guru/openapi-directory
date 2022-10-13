from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateFavoritesBulkRequest:
    is_favorite: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFavorite' }})
    object_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectIds' }})
    
