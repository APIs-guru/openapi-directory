from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AddEvidencePaymentDisputeResponse:
    r"""AddEvidencePaymentDisputeResponse
    This type is used by the response payload of the addEvidence method. Its only field is an unique identifier of an evidence set.
    """
    
    evidence_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceId') }})
    
