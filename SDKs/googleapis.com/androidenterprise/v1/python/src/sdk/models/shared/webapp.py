from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import webappicon

class WebAppDisplayModeEnum(str, Enum):
    DISPLAY_MODE_UNSPECIFIED = "displayModeUnspecified"
    MINIMAL_UI = "minimalUi"
    STANDALONE = "standalone"
    FULL_SCREEN = "fullScreen"


@dataclass_json
@dataclass
class WebApp:
    display_mode: Optional[WebAppDisplayModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayMode' }})
    icons: Optional[List[webappicon.WebAppIcon]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icons' }})
    is_published: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPublished' }})
    start_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startUrl' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionCode' }})
    web_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webAppId' }})
    
