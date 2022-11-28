from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppPkgSubscriptionLinkList:
    r"""AppPkgSubscriptionLinkList
    'The data type represents a subscription link list of notification on application package management'
    """
    
    links: AppPkgSubscriptionLinkListLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    
