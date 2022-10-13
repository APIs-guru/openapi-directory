from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AffiliateVideoUrls:
    large_motion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'large_motion' }})
    large_still: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'large_still' }})
    medium_still: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medium_still' }})
    small_motion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'small_motion' }})
    small_still: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'small_still' }})
    
