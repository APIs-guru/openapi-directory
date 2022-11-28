from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessFilter:
    r"""GoogleAnalyticsAdminV1alphaAccessFilter
    An expression to filter dimension or metric values.
    """
    
    between_filter: Optional[GoogleAnalyticsAdminV1alphaAccessBetweenFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('betweenFilter') }})
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    in_list_filter: Optional[GoogleAnalyticsAdminV1alphaAccessInListFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inListFilter') }})
    numeric_filter: Optional[GoogleAnalyticsAdminV1alphaAccessNumericFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numericFilter') }})
    string_filter: Optional[GoogleAnalyticsAdminV1alphaAccessStringFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringFilter') }})
    
