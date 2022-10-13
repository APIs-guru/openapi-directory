from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grantedlicense


@dataclass_json
@dataclass
class ListReceivedLicensesResponse:
    licenses: Optional[List[grantedlicense.GrantedLicense]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Licenses' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
