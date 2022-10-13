from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class SecurityContextSecuritiesEnum(str, Enum):
    INSECURE = "INSECURE"
    SSL = "SSL"


@dataclass_json
@dataclass
class SecurityContext:
    securities: Optional[List[SecurityContextSecuritiesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securities' }})
    
