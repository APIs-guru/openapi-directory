from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ComplianceDetails:
    compliance_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceStatus' }})
    keys_with_noncompliant_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeysWithNoncompliantValues' }})
    noncompliant_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NoncompliantKeys' }})
    
