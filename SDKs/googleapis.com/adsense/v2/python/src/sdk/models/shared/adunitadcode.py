from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdUnitAdCode:
    r"""AdUnitAdCode
    Representation of the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).
    """
    
    ad_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adCode') }})
    
