from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaExpandedDataSetFilter:
    r"""GoogleAnalyticsAdminV1alphaExpandedDataSetFilter
    A specific filter for a single dimension
    """
    
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    in_list_filter: Optional[GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inListFilter') }})
    string_filter: Optional[GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringFilter') }})
    
