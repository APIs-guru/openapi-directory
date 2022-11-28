from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ApplicationReportApplicationSourceEnum(str, Enum):
    APPLICATION_SOURCE_UNSPECIFIED = "APPLICATION_SOURCE_UNSPECIFIED"
    SYSTEM_APP_FACTORY_VERSION = "SYSTEM_APP_FACTORY_VERSION"
    SYSTEM_APP_UPDATED_VERSION = "SYSTEM_APP_UPDATED_VERSION"
    INSTALLED_FROM_PLAY_STORE = "INSTALLED_FROM_PLAY_STORE"

class ApplicationReportStateEnum(str, Enum):
    APPLICATION_STATE_UNSPECIFIED = "APPLICATION_STATE_UNSPECIFIED"
    REMOVED = "REMOVED"
    INSTALLED = "INSTALLED"


@dataclass_json
@dataclass
class ApplicationReport:
    r"""ApplicationReport
    Information reported about an installed app.
    """
    
    application_source: Optional[ApplicationReportApplicationSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationSource') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    events: Optional[List[ApplicationEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    installer_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installerPackageName') }})
    keyed_app_states: Optional[List[KeyedAppState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyedAppStates') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    package_sha256_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageSha256Hash') }})
    signing_key_cert_fingerprints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKeyCertFingerprints') }})
    state: Optional[ApplicationReportStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    version_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionCode') }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionName') }})
    
