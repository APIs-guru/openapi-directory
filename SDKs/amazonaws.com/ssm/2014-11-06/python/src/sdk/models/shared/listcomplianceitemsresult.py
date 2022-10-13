from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import complianceitem


@dataclass_json
@dataclass
class ListComplianceItemsResult:
    compliance_items: Optional[List[complianceitem.ComplianceItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceItems' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
