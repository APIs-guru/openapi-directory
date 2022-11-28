from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlgorithmVersionInfoList:
    r"""AlgorithmVersionInfoList
    Information of all available algorithms
    """
    
    file_key_algorithms: List[AlgorithmVersionInfo] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileKeyAlgorithms') }})
    key_pair_algorithms: List[AlgorithmVersionInfo] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPairAlgorithms') }})
    
