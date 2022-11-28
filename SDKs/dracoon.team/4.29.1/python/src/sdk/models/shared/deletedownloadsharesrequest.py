from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteDownloadSharesRequest:
    r"""DeleteDownloadSharesRequest
    Request model for deleting Download Shares
    """
    
    share_ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareIds') }})
    
