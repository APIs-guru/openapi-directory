from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductSigningCertificate:
    certificate_hash_sha1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateHashSha1' }})
    certificate_hash_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateHashSha256' }})
    
