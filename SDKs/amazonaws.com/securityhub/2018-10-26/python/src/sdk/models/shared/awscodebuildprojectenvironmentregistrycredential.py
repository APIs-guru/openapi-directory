from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsCodeBuildProjectEnvironmentRegistryCredential:
    r"""AwsCodeBuildProjectEnvironmentRegistryCredential
    The credentials for access to a private registry.
    """
    
    credential: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credential') }})
    credential_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CredentialProvider') }})
    
