from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessInListFilter:
    r"""GoogleAnalyticsAdminV1alphaAccessInListFilter
    The result needs to be in a list of string values.
    """
    
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseSensitive') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
