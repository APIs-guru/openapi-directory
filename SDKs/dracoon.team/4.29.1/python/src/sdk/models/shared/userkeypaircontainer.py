from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserKeyPairContainerOutput:
    r"""UserKeyPairContainerOutput
    Key pair container
    """
    
    private_key_container: PrivateKeyContainerOutput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKeyContainer') }})
    public_key_container: PublicKeyContainerOutput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeyContainer') }})
    

@dataclass_json
@dataclass
class UserKeyPairContainer:
    r"""UserKeyPairContainer
    Key pair container
    """
    
    private_key_container: PrivateKeyContainer = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKeyContainer') }})
    public_key_container: PublicKeyContainer = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeyContainer') }})
    
