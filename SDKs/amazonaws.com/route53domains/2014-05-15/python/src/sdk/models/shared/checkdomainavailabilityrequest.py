from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CheckDomainAvailabilityRequest:
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    idn_lang_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdnLangCode' }})
    
