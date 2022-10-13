from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orgunit


@dataclass_json
@dataclass
class OrgUnits:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    organization_units: Optional[List[orgunit.OrgUnit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationUnits' }})
    
