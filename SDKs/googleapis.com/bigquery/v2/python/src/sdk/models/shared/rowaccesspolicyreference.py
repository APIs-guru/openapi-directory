from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RowAccessPolicyReference:
    dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetId' }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyId' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableId' }})
    
