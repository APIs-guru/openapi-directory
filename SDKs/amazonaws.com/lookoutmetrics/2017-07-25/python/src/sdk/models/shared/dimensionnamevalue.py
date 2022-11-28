from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DimensionNameValue:
    r"""DimensionNameValue
    A dimension name and value.
    """
    
    dimension_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionName') }})
    dimension_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionValue') }})
    
