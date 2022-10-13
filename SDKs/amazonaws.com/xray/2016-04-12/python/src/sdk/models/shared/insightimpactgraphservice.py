from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import insightimpactgraphedge


@dataclass_json
@dataclass
class InsightImpactGraphService:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    edges: Optional[List[insightimpactgraphedge.InsightImpactGraphEdge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Edges' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Names' }})
    reference_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceId' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
