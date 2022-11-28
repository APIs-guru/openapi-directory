from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTransferLogsResponse:
    r"""ListTransferLogsResponse
    The returned list transfer run messages.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    transfer_messages: Optional[List[TransferMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferMessages') }})
    
