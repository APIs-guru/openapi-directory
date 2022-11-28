from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UsesPermission:
    r"""UsesPermission
    A permission used by this APK.
    """
    
    max_sdk_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSdkVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
