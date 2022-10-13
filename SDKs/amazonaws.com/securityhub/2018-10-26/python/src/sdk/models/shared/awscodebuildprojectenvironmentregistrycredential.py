from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsCodeBuildProjectEnvironmentRegistryCredential:
    credential: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credential' }})
    credential_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CredentialProvider' }})
    
