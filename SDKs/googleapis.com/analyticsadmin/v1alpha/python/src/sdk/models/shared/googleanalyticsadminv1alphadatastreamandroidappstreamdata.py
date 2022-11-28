from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput:
    r"""GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput
    Data specific to Android app streams.
    """
    
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    

@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData:
    r"""GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData
    Data specific to Android app streams.
    """
    
    firebase_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firebaseAppId') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    
