from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v2androidkeyrestrictions
from . import v2apitarget
from . import v2browserkeyrestrictions
from . import v2ioskeyrestrictions
from . import v2serverkeyrestrictions


@dataclass_json
@dataclass
class V2Restrictions:
    android_key_restrictions: Optional[v2androidkeyrestrictions.V2AndroidKeyRestrictions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidKeyRestrictions' }})
    api_targets: Optional[List[v2apitarget.V2APITarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiTargets' }})
    browser_key_restrictions: Optional[v2browserkeyrestrictions.V2BrowserKeyRestrictions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browserKeyRestrictions' }})
    ios_key_restrictions: Optional[v2ioskeyrestrictions.V2IosKeyRestrictions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosKeyRestrictions' }})
    server_key_restrictions: Optional[v2serverkeyrestrictions.V2ServerKeyRestrictions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverKeyRestrictions' }})
    
