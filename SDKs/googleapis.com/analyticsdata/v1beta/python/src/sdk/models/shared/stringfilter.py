from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class StringFilterMatchTypeEnum(str, Enum):
    MATCH_TYPE_UNSPECIFIED = "MATCH_TYPE_UNSPECIFIED"
    EXACT = "EXACT"
    BEGINS_WITH = "BEGINS_WITH"
    ENDS_WITH = "ENDS_WITH"
    CONTAINS = "CONTAINS"
    FULL_REGEXP = "FULL_REGEXP"
    PARTIAL_REGEXP = "PARTIAL_REGEXP"


@dataclass_json
@dataclass
class StringFilter:
    r"""StringFilter
    The filter for string
    """
    
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseSensitive') }})
    match_type: Optional[StringFilterMatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchType') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
