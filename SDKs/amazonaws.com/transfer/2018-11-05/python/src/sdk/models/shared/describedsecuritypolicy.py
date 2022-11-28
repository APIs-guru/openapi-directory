from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribedSecurityPolicy:
    r"""DescribedSecurityPolicy
    Describes the properties of a security policy that was specified. For more information about security policies, see <a href=\"https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html\">Working with security policies</a>.
    """
    
    security_policy_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityPolicyName') }})
    fips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Fips') }})
    ssh_ciphers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshCiphers') }})
    ssh_kexs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshKexs') }})
    ssh_macs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshMacs') }})
    tls_ciphers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TlsCiphers') }})
    
