from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1developersubscription


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse:
    developer_subscriptions: Optional[List[googlecloudapigeev1developersubscription.GoogleCloudApigeeV1DeveloperSubscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerSubscriptions' }})
    next_start_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextStartKey' }})
    
