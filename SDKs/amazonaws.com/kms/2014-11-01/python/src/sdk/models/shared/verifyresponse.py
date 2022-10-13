from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import signingalgorithmspec_enum


@dataclass_json
@dataclass
class VerifyResponse:
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    signature_valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SignatureValid' }})
    signing_algorithm: Optional[signingalgorithmspec_enum.SigningAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningAlgorithm' }})
    
