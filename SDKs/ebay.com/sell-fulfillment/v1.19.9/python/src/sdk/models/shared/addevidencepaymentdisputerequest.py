from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fileevidence
from . import orderlineitems


@dataclass_json
@dataclass
class AddEvidencePaymentDisputeRequest:
    evidence_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceType' }})
    files: Optional[List[fileevidence.FileEvidence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    line_items: Optional[List[orderlineitems.OrderLineItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    
