from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import identityinfo


@dataclass_json
@dataclass
class ListEmailIdentitiesResponse:
    email_identities: Optional[List[identityinfo.IdentityInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailIdentities' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
