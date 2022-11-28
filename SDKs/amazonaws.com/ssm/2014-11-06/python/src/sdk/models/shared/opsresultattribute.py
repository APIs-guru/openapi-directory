from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OpsResultAttribute:
    r"""OpsResultAttribute
    The OpsItem data type to return.
    """
    
    type_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeName') }})
    
