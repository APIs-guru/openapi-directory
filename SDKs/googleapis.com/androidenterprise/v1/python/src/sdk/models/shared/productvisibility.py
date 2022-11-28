from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProductVisibilityTracksEnum(str, Enum):
    APP_TRACK_UNSPECIFIED = "appTrackUnspecified"
    PRODUCTION = "production"
    BETA = "beta"
    ALPHA = "alpha"


@dataclass_json
@dataclass
class ProductVisibility:
    r"""ProductVisibility
    A product to be made visible to a user.
    """
    
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    track_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackIds') }})
    tracks: Optional[List[ProductVisibilityTracksEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    
