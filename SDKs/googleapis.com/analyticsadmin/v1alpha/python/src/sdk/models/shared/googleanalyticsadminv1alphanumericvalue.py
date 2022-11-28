from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaNumericValue:
    r"""GoogleAnalyticsAdminV1alphaNumericValue
    To represent a number.
    """
    
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    int64_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('int64Value') }})
    
