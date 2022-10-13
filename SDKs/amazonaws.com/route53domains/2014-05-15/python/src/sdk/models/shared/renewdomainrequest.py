from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RenewDomainRequest:
    current_expiry_year: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentExpiryYear' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    duration_in_years: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationInYears' }})
    
