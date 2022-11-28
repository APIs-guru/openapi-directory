from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class WebAppDisplayModeEnum(str, Enum):
    DISPLAY_MODE_UNSPECIFIED = "DISPLAY_MODE_UNSPECIFIED"
    MINIMAL_UI = "MINIMAL_UI"
    STANDALONE = "STANDALONE"
    FULL_SCREEN = "FULL_SCREEN"


@dataclass_json
@dataclass
class WebApp:
    r"""WebApp
    A web app.
    """
    
    display_mode: Optional[WebAppDisplayModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayMode') }})
    icons: Optional[List[WebAppIcon]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icons') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    start_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startUrl') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionCode') }})
    
