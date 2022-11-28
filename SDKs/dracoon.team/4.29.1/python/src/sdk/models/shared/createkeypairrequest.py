from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateKeyPairRequest:
    r"""CreateKeyPairRequest
    Request model for creating a key pair
    """
    
    previous_private_key: PrivateKeyContainer = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousPrivateKey') }})
    private_key_container: PrivateKeyContainer = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKeyContainer') }})
    public_key_container: PublicKeyContainer = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeyContainer') }})
    
