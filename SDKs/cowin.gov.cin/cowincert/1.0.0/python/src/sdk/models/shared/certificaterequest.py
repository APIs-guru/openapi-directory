from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CertificateRequest:
    beneficiary_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beneficiaryId' }})
    mobile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobile' }})
    
