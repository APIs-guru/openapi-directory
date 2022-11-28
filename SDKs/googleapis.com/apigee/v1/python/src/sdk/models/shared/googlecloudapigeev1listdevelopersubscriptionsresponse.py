from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse:
    r"""GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse
    Response for ListDeveloperSubscriptions.
    """
    
    developer_subscriptions: Optional[List[GoogleCloudApigeeV1DeveloperSubscription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerSubscriptions') }})
    next_start_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextStartKey') }})
    
