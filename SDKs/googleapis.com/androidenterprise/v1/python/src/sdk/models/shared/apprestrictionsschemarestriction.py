from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AppRestrictionsSchemaRestrictionRestrictionTypeEnum(str, Enum):
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
class AppRestrictionsSchemaRestriction:
    r"""AppRestrictionsSchemaRestriction
    A restriction in the App Restriction Schema represents a piece of configuration that may be pre-applied.
    """
    
    default_value: Optional[AppRestrictionsSchemaRestrictionRestrictionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    entry: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry') }})
    entry_value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryValue') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    nested_restriction: Optional[List[AppRestrictionsSchemaRestriction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nestedRestriction') }})
    restriction_type: Optional[AppRestrictionsSchemaRestrictionRestrictionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictionType') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
