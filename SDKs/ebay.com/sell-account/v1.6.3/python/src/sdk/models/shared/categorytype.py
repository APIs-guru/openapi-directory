from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CategoryType:
    r"""CategoryType
    The category type discerns whether the policy covers the sale of motor vehicles (via eBay Motors), or the sale of everything except motor vehicles. Each business policy can be associated with either or both categories ('MOTORS_VEHICLES' and 'ALL_EXCLUDING_MOTORS_VEHICLES'); however,the 'MOTORS_VEHICLES' category type is not valid for return policies&ndash;return policies cannot be used with motor vehicle listings.
    """
    
    default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
