from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import webappicon

class WebAppDisplayModeEnum(str, Enum):
    DISPLAY_MODE_UNSPECIFIED = "DISPLAY_MODE_UNSPECIFIED"
    MINIMAL_UI = "MINIMAL_UI"
    STANDALONE = "STANDALONE"
    FULL_SCREEN = "FULL_SCREEN"


@dataclass_json
@dataclass
class WebApp:
    display_mode: Optional[WebAppDisplayModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayMode' }})
    icons: Optional[List[webappicon.WebAppIcon]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icons' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    start_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startUrl' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionCode' }})
    
