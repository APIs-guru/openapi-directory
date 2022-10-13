from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import algorithmversioninfo
from . import algorithmversioninfo


@dataclass_json
@dataclass
class AlgorithmVersionInfoList:
    file_key_algorithms: List[algorithmversioninfo.AlgorithmVersionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileKeyAlgorithms' }})
    key_pair_algorithms: List[algorithmversioninfo.AlgorithmVersionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPairAlgorithms' }})
    
