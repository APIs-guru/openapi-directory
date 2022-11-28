from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RelationalDatabaseParameter:
    r"""RelationalDatabaseParameter
    Describes the parameters of a database.
    """
    
    allowed_values: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedValues') }})
    apply_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyMethod') }})
    apply_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyType') }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    is_modifiable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isModifiable') }})
    parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterName') }})
    parameter_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterValue') }})
    
