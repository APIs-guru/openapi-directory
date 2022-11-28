from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AppManualAppInfo:
    r"""AppManualAppInfo
    Information provided for manual apps which are not linked to an application store (Example: Google Play, App Store).
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
