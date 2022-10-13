from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nameserver


@dataclass_json
@dataclass
class UpdateDomainNameserversRequest:
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    fi_auth_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FIAuthKey' }})
    nameservers: List[nameserver.Nameserver] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Nameservers' }})
    
