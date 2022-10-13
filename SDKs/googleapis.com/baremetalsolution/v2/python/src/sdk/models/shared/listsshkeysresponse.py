from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sshkey


@dataclass_json
@dataclass
class ListSSHKeysResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    ssh_keys: Optional[List[sshkey.SSHKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sshKeys' }})
    
