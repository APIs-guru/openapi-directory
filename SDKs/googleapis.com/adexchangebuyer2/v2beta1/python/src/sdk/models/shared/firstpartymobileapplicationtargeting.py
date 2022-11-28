from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FirstPartyMobileApplicationTargeting:
    r"""FirstPartyMobileApplicationTargeting
    Represents a list of targeted and excluded mobile application IDs that publishers own. Mobile application IDs are from App Store and Google Play Store. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded.
    """
    
    excluded_app_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedAppIds') }})
    targeted_app_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetedAppIds') }})
    
