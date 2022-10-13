from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrgUnit:
    block_inheritance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockInheritance' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgUnitId' }})
    org_unit_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgUnitPath' }})
    parent_org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentOrgUnitId' }})
    parent_org_unit_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentOrgUnitPath' }})
    
