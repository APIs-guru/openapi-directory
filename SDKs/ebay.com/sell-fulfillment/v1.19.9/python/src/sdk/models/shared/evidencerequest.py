from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderlineitems


@dataclass_json
@dataclass
class EvidenceRequest:
    evidence_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceId' }})
    evidence_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceType' }})
    line_items: Optional[List[orderlineitems.OrderLineItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    request_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestDate' }})
    respond_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'respondByDate' }})
    
