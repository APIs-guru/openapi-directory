from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import countrytargeting
from . import localizedtext

class TrackReleaseStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "statusUnspecified"
    DRAFT = "draft"
    IN_PROGRESS = "inProgress"
    HALTED = "halted"
    COMPLETED = "completed"


@dataclass_json
@dataclass
class TrackRelease:
    country_targeting: Optional[countrytargeting.CountryTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryTargeting' }})
    in_app_update_priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inAppUpdatePriority' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    release_notes: Optional[List[localizedtext.LocalizedText]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseNotes' }})
    status: Optional[TrackReleaseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    user_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userFraction' }})
    version_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionCodes' }})
    
