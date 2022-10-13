from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SignatureInfo:
    customer_kms_key_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerKmsKeyVersion' }})
    google_public_key_pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googlePublicKeyPem' }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    
