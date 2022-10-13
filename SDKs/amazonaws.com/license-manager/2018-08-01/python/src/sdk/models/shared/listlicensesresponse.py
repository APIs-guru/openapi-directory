from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import license


@dataclass_json
@dataclass
class ListLicensesResponse:
    licenses: Optional[List[license.License]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Licenses' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
