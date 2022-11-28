from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum(str, Enum):
    MATCH_TYPE_UNSPECIFIED = "MATCH_TYPE_UNSPECIFIED"
    EXACT = "EXACT"
    CONTAINS = "CONTAINS"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter:
    r"""GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter
    A filter for a string-type dimension that matches a particular pattern.
    """
    
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseSensitive') }})
    match_type: Optional[GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchType') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
