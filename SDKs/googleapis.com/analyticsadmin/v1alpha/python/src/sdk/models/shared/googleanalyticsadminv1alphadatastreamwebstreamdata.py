from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDataStreamWebStreamData:
    r"""GoogleAnalyticsAdminV1alphaDataStreamWebStreamData
    Data specific to web streams.
    """
    
    default_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultUri') }})
    firebase_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firebaseAppId') }})
    measurement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementId') }})
    

@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput:
    r"""GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput
    Data specific to web streams.
    """
    
    default_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultUri') }})
    
