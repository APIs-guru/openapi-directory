from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSSHKeysResponse:
    r"""ListSSHKeysResponse
    Message for response of ListSSHKeys.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    ssh_keys: Optional[List[SSHKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshKeys') }})
    
