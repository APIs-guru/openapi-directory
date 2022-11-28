from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppPkgSubscriptionInfo:
    r"""AppPkgSubscriptionInfo
    'The data type represents a subscription to notification of application package management for the onboarding, or operational state change of application package'
    """
    
    links: AppPkgSubscriptionInfoLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    callback_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackUri') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    subscription_type: AppPkgSubscriptionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionType') }})
    
