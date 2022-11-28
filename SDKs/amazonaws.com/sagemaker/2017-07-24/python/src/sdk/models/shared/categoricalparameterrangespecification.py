from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CategoricalParameterRangeSpecification:
    r"""CategoricalParameterRangeSpecification
    Defines the possible values for a categorical hyperparameter.
    """
    
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
