from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnableCustomerEncryptionRequest:
    r"""EnableCustomerEncryptionRequest
    Request model for enabling customer encryption
    """
    
    data_space_rescue_key: UserKeyPairContainer = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSpaceRescueKey') }})
    enable_customer_encryption: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableCustomerEncryption') }})
    
