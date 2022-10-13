from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import organizationalunit


@dataclass_json
@dataclass
class ListOrganizationalUnitsForParentResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    organizational_units: Optional[List[organizationalunit.OrganizationalUnit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationalUnits' }})
    
