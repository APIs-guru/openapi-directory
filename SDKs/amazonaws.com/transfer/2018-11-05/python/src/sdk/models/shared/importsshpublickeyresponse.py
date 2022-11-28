from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImportSSHPublicKeyResponse:
    r"""ImportSSHPublicKeyResponse
    Identifies the user, the server they belong to, and the identifier of the SSH public key associated with that user. A user can have more than one key on each server that they are associated with.
    """
    
    server_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    ssh_public_key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshPublicKeyId') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
