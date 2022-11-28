from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum(str, Enum):
    BOOL = "bool"
    STRING = "string"
    INTEGER = "integer"
    CHOICE = "choice"
    MULTISELECT = "multiselect"
    HIDDEN = "hidden"
    BUNDLE = "bundle"
    BUNDLE_ARRAY = "bundleArray"


@dataclass_json
@dataclass
class AppRestrictionsSchemaRestrictionRestrictionValue:
    r"""AppRestrictionsSchemaRestrictionRestrictionValue
    A typed value for the restriction.
    """
    
    type: Optional[AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value_bool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueBool') }})
    value_integer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueInteger') }})
    value_multiselect: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueMultiselect') }})
    value_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueString') }})
    
