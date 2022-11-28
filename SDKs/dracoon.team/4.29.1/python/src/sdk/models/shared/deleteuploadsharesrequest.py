from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteUploadSharesRequest:
    r"""DeleteUploadSharesRequest
    Request model for deleting Upload Shares
    """
    
    share_ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareIds') }})
    
