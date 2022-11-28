from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData:
    r"""GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData
    Data specific to iOS app streams.
    """
    
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    firebase_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firebaseAppId') }})
    

@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput:
    r"""GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput
    Data specific to iOS app streams.
    """
    
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    
