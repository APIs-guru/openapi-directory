from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PrivateData:
    r"""PrivateData
    Buyers are allowed to store certain types of private data in a proposal/deal.
    """
    
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceId') }})
    
