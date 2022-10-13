from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import transfermessage


@dataclass_json
@dataclass
class ListTransferLogsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    transfer_messages: Optional[List[transfermessage.TransferMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferMessages' }})
    
