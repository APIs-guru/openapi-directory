from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class WebAppDisplayModeEnum(str, Enum):
    DISPLAY_MODE_UNSPECIFIED = "displayModeUnspecified"
    MINIMAL_UI = "minimalUi"
    STANDALONE = "standalone"
    FULL_SCREEN = "fullScreen"


@dataclass_json
@dataclass
class WebApp:
    r"""WebApp
    A WebApps resource represents a web app created for an enterprise. Web apps are published to managed Google Play and can be distributed like other Android apps. On a user's device, a web app opens its specified URL.
    """
    
    display_mode: Optional[WebAppDisplayModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayMode') }})
    icons: Optional[List[WebAppIcon]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icons') }})
    is_published: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPublished') }})
    start_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startUrl') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionCode') }})
    web_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webAppId') }})
    
