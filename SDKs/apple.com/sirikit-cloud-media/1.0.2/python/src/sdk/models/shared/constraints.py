from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Constraints:
    allow_explicit_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowExplicitContent' }})
    maximum_queue_segment_item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumQueueSegmentItemCount' }})
    update_user_taste_profile: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateUserTasteProfile' }})
    
