from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceAlgorithmSpecification:
    r"""SourceAlgorithmSpecification
    A list of algorithms that were used to create a model package.
    """
    
    source_algorithms: List[SourceAlgorithm] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceAlgorithms') }})
    
