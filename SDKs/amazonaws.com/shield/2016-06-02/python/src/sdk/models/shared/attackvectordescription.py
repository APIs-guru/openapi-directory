from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttackVectorDescription:
    r"""AttackVectorDescription
    Describes the attack.
    """
    
    vector_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VectorType') }})
    
