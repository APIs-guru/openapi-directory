from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AppVersionTrackEnum(str, Enum):
    APP_TRACK_UNSPECIFIED = "appTrackUnspecified"
    PRODUCTION = "production"
    BETA = "beta"
    ALPHA = "alpha"


@dataclass_json
@dataclass
class AppVersion:
    is_production: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isProduction' }})
    track: Optional[AppVersionTrackEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'track' }})
    track_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackId' }})
    version_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionCode' }})
    version_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionString' }})
    
