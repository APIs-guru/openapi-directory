from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppPkgSubscriptionLinkListLinks:
    r"""AppPkgSubscriptionLinkListLinks
    Links to resources related to this resource.
    """
    
    self: LinkType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    subscriptions: Optional[List[SubscriptionsAppPkgSubscription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    
