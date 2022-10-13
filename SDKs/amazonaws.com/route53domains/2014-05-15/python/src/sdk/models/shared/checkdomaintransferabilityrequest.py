from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CheckDomainTransferabilityRequest:
    auth_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthCode' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    
