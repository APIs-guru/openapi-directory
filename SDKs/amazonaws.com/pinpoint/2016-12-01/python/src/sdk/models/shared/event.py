from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import session


@dataclass_json
@dataclass
class Event:
    app_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppPackageName' }})
    app_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppTitle' }})
    app_version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppVersionCode' }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    client_sdk_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientSdkVersion' }})
    event_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventType' }})
    metrics: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metrics' }})
    sdk_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SdkName' }})
    session: Optional[session.Session] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Session' }})
    timestamp: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp' }})
    
