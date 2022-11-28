from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisterInstanceRequest:
    stack_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hostname') }})
    instance_identity: Optional[InstanceIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceIdentity') }})
    private_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateIp') }})
    public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicIp') }})
    rsa_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RsaPublicKey') }})
    rsa_public_key_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RsaPublicKeyFingerprint') }})
    
