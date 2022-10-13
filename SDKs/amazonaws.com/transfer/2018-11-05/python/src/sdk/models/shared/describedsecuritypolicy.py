from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribedSecurityPolicy:
    fips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Fips' }})
    security_policy_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityPolicyName' }})
    ssh_ciphers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshCiphers' }})
    ssh_kexs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshKexs' }})
    ssh_macs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshMacs' }})
    tls_ciphers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TlsCiphers' }})
    
