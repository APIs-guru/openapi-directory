from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResumeProposalDealsRequest:
    r"""ResumeProposalDealsRequest
    Request message to resume (unpause) serving for already-finalized deals.
    """
    
    external_deal_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalDealIds') }})
    
