from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import signingalgorithmspec_enum


@dataclass_json
@dataclass
class SignResponse:
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Signature' }})
    signing_algorithm: Optional[signingalgorithmspec_enum.SigningAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningAlgorithm' }})
    
