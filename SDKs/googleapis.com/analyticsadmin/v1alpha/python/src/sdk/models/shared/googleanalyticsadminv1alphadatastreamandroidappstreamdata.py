from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData:
    firebase_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firebaseAppId' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    
