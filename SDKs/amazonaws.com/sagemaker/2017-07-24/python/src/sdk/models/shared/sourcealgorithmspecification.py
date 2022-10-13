from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import sourcealgorithm


@dataclass_json
@dataclass
class SourceAlgorithmSpecification:
    source_algorithms: List[sourcealgorithm.SourceAlgorithm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceAlgorithms' }})
    
