from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse:
    r"""GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse
    Response message for BeyondCorp.ListSubscriptions.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    subscriptions: Optional[List[GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    
