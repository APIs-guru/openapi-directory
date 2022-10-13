from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instanceidentity


@dataclass_json
@dataclass
class RegisterInstanceRequest:
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Hostname' }})
    instance_identity: Optional[instanceidentity.InstanceIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceIdentity' }})
    private_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateIp' }})
    public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicIp' }})
    rsa_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RsaPublicKey' }})
    rsa_public_key_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RsaPublicKeyFingerprint' }})
    stack_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    
