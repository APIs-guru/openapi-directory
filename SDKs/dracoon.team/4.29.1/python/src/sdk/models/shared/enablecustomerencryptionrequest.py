from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import userkeypaircontainer


@dataclass_json
@dataclass
class EnableCustomerEncryptionRequest:
    data_space_rescue_key: userkeypaircontainer.UserKeyPairContainer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSpaceRescueKey' }})
    enable_customer_encryption: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableCustomerEncryption' }})
    
