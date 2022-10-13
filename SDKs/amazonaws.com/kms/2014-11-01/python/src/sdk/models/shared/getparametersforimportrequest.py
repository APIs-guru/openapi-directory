from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import algorithmspec_enum
from . import wrappingkeyspec_enum


@dataclass_json
@dataclass
class GetParametersForImportRequest:
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    wrapping_algorithm: algorithmspec_enum.AlgorithmSpecEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WrappingAlgorithm' }})
    wrapping_key_spec: wrappingkeyspec_enum.WrappingKeySpecEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WrappingKeySpec' }})
    
