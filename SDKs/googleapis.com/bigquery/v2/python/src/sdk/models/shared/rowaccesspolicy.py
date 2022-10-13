from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rowaccesspolicyreference


@dataclass_json
@dataclass
class RowAccessPolicy:
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    filter_predicate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterPredicate' }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedTime' }})
    row_access_policy_reference: Optional[rowaccesspolicyreference.RowAccessPolicyReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowAccessPolicyReference' }})
    
