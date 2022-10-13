from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import contentadssettings

class AdUnitStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"


@dataclass_json
@dataclass
class AdUnit:
    content_ads_settings: Optional[contentadssettings.ContentAdsSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentAdsSettings' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reporting_dimension_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportingDimensionId' }})
    state: Optional[AdUnitStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
