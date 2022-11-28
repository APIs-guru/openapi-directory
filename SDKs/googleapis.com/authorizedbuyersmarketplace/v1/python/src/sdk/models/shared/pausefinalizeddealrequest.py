from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PauseFinalizedDealRequest:
    r"""PauseFinalizedDealRequest
    Request message for pausing a finalized deal.
    """
    
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
