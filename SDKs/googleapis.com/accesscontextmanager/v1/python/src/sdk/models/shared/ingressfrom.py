from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ingresssource

class IngressFromIdentityTypeEnum(str, Enum):
    IDENTITY_TYPE_UNSPECIFIED = "IDENTITY_TYPE_UNSPECIFIED"
    ANY_IDENTITY = "ANY_IDENTITY"
    ANY_USER_ACCOUNT = "ANY_USER_ACCOUNT"
    ANY_SERVICE_ACCOUNT = "ANY_SERVICE_ACCOUNT"


@dataclass_json
@dataclass
class IngressFrom:
    identities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identities' }})
    identity_type: Optional[IngressFromIdentityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityType' }})
    sources: Optional[List[ingresssource.IngressSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
