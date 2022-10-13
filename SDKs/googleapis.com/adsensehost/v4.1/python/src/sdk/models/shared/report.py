from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportHeaders:
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class Report:
    averages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averages' }})
    headers: Optional[List[ReportHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    rows: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    total_matched_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalMatchedRows' }})
    totals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totals' }})
    warnings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
