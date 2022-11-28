from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Event:
    r"""Event
    Specifies information about an event that reports data to Amazon Pinpoint.
    """
    
    event_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventType') }})
    timestamp: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    app_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppPackageName') }})
    app_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppTitle') }})
    app_version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppVersionCode') }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    client_sdk_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientSdkVersion') }})
    metrics: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metrics') }})
    sdk_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SdkName') }})
    session: Optional[Session] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Session') }})
    
