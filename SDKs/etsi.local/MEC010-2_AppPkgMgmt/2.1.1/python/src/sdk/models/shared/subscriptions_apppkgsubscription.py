from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubscriptionsAppPkgSubscription:
    r"""SubscriptionsAppPkgSubscription
    'The data type represents the input parameters of \"subscription operation\" to notification of application package management for the onboarding, or operational state change of application package.'
    """
    
    href: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    subsctiption_type: SubsctiptionTypeAppPkgEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subsctiptionType') }})
    
