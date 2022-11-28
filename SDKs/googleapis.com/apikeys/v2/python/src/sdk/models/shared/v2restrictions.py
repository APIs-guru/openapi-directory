from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class V2Restrictions:
    r"""V2Restrictions
    Describes the restrictions on the key.
    """
    
    android_key_restrictions: Optional[V2AndroidKeyRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidKeyRestrictions') }})
    api_targets: Optional[List[V2APITarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiTargets') }})
    browser_key_restrictions: Optional[V2BrowserKeyRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserKeyRestrictions') }})
    ios_key_restrictions: Optional[V2IosKeyRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosKeyRestrictions') }})
    server_key_restrictions: Optional[V2ServerKeyRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverKeyRestrictions') }})
    
