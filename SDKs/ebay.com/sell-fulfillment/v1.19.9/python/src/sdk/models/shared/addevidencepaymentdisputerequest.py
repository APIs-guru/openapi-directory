from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddEvidencePaymentDisputeRequest:
    r"""AddEvidencePaymentDisputeRequest
    This type is used by the request payload of the addEvidence method. The addEvidence method is used to create a new evidence set against a payment dispute with one or more evidence files.
    """
    
    evidence_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceType') }})
    files: Optional[List[FileEvidence]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    line_items: Optional[List[OrderLineItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    
