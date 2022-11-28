from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetPublicKeyResponse:
    customer_master_key_spec: Optional[CustomerMasterKeySpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerMasterKeySpec') }})
    encryption_algorithms: Optional[List[EncryptionAlgorithmSpecEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionAlgorithms') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    key_spec: Optional[KeySpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySpec') }})
    key_usage: Optional[KeyUsageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyUsage') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicKey') }})
    signing_algorithms: Optional[List[SigningAlgorithmSpecEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAlgorithms') }})
    
