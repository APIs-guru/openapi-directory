from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import privatekeycontainer
from . import privatekeycontainer
from . import publickeycontainer


@dataclass_json
@dataclass
class CreateKeyPairRequest:
    previous_private_key: privatekeycontainer.PrivateKeyContainer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousPrivateKey' }})
    private_key_container: privatekeycontainer.PrivateKeyContainer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKeyContainer' }})
    public_key_container: publickeycontainer.PublicKeyContainer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKeyContainer' }})
    
