from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import applinkedappinfo
from . import appmanualappinfo


@dataclass_json
@dataclass
class App:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    linked_app_info: Optional[applinkedappinfo.AppLinkedAppInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedAppInfo' }})
    manual_app_info: Optional[appmanualappinfo.AppManualAppInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manualAppInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    
