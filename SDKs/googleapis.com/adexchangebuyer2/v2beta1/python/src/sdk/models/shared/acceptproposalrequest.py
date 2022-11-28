from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AcceptProposalRequest:
    r"""AcceptProposalRequest
    Request to accept a proposal.
    """
    
    proposal_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalRevision') }})
    
