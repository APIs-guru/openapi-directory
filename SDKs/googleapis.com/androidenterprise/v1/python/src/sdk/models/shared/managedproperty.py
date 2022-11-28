from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ManagedProperty:
    r"""ManagedProperty
    A managed property of a managed configuration. The property must match one of the properties in the app restrictions schema of the product. Exactly one of the value fields must be populated, and it must match the property's type in the app restrictions schema.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value_bool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueBool') }})
    value_bundle: Optional[ManagedPropertyBundle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueBundle') }})
    value_bundle_array: Optional[List[ManagedPropertyBundle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueBundleArray') }})
    value_integer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueInteger') }})
    value_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueString') }})
    value_string_array: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueStringArray') }})
    
