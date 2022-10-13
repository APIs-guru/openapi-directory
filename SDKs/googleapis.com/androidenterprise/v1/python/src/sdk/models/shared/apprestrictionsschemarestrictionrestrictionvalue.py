from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    type: Optional[AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value_bool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueBool' }})
    value_integer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueInteger' }})
    value_multiselect: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueMultiselect' }})
    value_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueString' }})
    
