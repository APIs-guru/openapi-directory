from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SupportedConfiguration:
    r"""SupportedConfiguration
    An array that defines the configuration supported by this template. This includes specified properties and usage (whether the property is REQUIRED or OPTIONAL), and an optional default value.
    """
    
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    usage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    
