from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TrackReleaseStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "statusUnspecified"
    DRAFT = "draft"
    IN_PROGRESS = "inProgress"
    HALTED = "halted"
    COMPLETED = "completed"


@dataclass_json
@dataclass
class TrackRelease:
    r"""TrackRelease
    A release within a track.
    """
    
    country_targeting: Optional[CountryTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryTargeting') }})
    in_app_update_priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inAppUpdatePriority') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    release_notes: Optional[List[LocalizedText]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseNotes') }})
    status: Optional[TrackReleaseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    user_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userFraction') }})
    version_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionCodes') }})
    
