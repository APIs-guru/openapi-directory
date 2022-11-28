from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AppVersionTrackEnum(str, Enum):
    APP_TRACK_UNSPECIFIED = "appTrackUnspecified"
    PRODUCTION = "production"
    BETA = "beta"
    ALPHA = "alpha"


@dataclass_json
@dataclass
class AppVersion:
    r"""AppVersion
    This represents a single version of the app.
    """
    
    is_production: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isProduction') }})
    track: Optional[AppVersionTrackEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('track') }})
    track_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackId') }})
    version_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionCode') }})
    version_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionString') }})
    
