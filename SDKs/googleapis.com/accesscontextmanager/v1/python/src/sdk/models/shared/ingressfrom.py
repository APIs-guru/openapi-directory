from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class IngressFromIdentityTypeEnum(str, Enum):
    IDENTITY_TYPE_UNSPECIFIED = "IDENTITY_TYPE_UNSPECIFIED"
    ANY_IDENTITY = "ANY_IDENTITY"
    ANY_USER_ACCOUNT = "ANY_USER_ACCOUNT"
    ANY_SERVICE_ACCOUNT = "ANY_SERVICE_ACCOUNT"


@dataclass_json
@dataclass
class IngressFrom:
    r"""IngressFrom
    Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match.
    """
    
    identities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identities') }})
    identity_type: Optional[IngressFromIdentityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityType') }})
    sources: Optional[List[IngressSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
