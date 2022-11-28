from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccountSummary:
    r"""GoogleAnalyticsAdminV1alphaAccountSummary
    A virtual resource representing an overview of an account and all its child GA4 properties.
    """
    
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    property_summaries: Optional[List[GoogleAnalyticsAdminV1alphaPropertySummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertySummaries') }})
    
