from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AffiliateImageUrls:
    large: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'large' }})
    large_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'large_height' }})
    large_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'large_width' }})
    medium: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medium' }})
    medium_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medium_height' }})
    medium_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medium_width' }})
    small: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'small' }})
    small_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'small_height' }})
    small_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'small_width' }})
    
