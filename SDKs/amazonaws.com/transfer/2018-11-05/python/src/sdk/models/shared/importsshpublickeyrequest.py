from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImportSSHPublicKeyRequest:
    server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    ssh_public_key_body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshPublicKeyBody' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    
