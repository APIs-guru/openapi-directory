from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PasswordData:
    r"""PasswordData
    The password data for the Windows Server-based instance, including the ciphertext and the key pair name.
    """
    
    ciphertext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciphertext') }})
    key_pair_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPairName') }})
    
