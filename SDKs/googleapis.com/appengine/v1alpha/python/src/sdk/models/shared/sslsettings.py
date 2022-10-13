from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SslSettings:
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateId' }})
    is_managed_certificate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isManagedCertificate' }})
    
