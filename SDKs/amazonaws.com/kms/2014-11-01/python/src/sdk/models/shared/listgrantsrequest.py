from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListGrantsRequest:
    grant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantId' }})
    grantee_principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GranteePrincipal' }})
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    
