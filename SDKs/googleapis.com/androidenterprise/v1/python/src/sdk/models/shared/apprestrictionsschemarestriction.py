from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import apprestrictionsschemarestrictionrestrictionvalue
from . import apprestrictionsschemarestriction

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
    default_value: Optional[apprestrictionsschemarestrictionrestrictionvalue.AppRestrictionsSchemaRestrictionRestrictionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    entry: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry' }})
    entry_value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryValue' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    nested_restriction: Optional[List[apprestrictionsschemarestriction.AppRestrictionsSchemaRestriction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nestedRestriction' }})
    restriction_type: Optional[AppRestrictionsSchemaRestrictionRestrictionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictionType' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
