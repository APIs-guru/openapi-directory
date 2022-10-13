from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdsenseReportsGenerateResponseHeaders:
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class AdsenseReportsGenerateResponse:
    averages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averages' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    headers: Optional[List[AdsenseReportsGenerateResponseHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    rows: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    total_matched_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalMatchedRows' }})
    totals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totals' }})
    warnings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
