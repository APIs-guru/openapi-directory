from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTransferConfigsResponse:
    r"""ListTransferConfigsResponse
    The returned list of pipelines in the project.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    transfer_configs: Optional[List[TransferConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferConfigs') }})
    
