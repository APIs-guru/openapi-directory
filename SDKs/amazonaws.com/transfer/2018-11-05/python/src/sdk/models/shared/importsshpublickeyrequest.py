from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImportSSHPublicKeyRequest:
    server_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    ssh_public_key_body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshPublicKeyBody') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
