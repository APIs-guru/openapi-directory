from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import managedpropertybundle
from . import managedpropertybundle


@dataclass_json
@dataclass
class ManagedProperty:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value_bool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueBool' }})
    value_bundle: Optional[managedpropertybundle.ManagedPropertyBundle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueBundle' }})
    value_bundle_array: Optional[List[managedpropertybundle.ManagedPropertyBundle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueBundleArray' }})
    value_integer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueInteger' }})
    value_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueString' }})
    value_string_array: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueStringArray' }})
    
