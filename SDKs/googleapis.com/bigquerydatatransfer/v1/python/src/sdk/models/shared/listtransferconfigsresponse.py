from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import transferconfig


@dataclass_json
@dataclass
class ListTransferConfigsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    transfer_configs: Optional[List[transferconfig.TransferConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferConfigs' }})
    
