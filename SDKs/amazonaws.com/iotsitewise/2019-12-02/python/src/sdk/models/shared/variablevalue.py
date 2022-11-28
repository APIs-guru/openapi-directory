from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VariableValue:
    r"""VariableValue
    Identifies a property value used in an expression.
    """
    
    property_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyId') }})
    hierarchy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hierarchyId') }})
    
