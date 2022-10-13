from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ProductVisibilityTracksEnum(str, Enum):
    APP_TRACK_UNSPECIFIED = "appTrackUnspecified"
    PRODUCTION = "production"
    BETA = "beta"
    ALPHA = "alpha"


@dataclass_json
@dataclass
class ProductVisibility:
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    track_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackIds' }})
    tracks: Optional[List[ProductVisibilityTracksEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracks' }})
    
