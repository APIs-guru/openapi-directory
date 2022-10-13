from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awscodebuildprojectenvironmentregistrycredential


@dataclass_json
@dataclass
class AwsCodeBuildProjectEnvironment:
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificate' }})
    image_pull_credentials_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImagePullCredentialsType' }})
    registry_credential: Optional[awscodebuildprojectenvironmentregistrycredential.AwsCodeBuildProjectEnvironmentRegistryCredential] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryCredential' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
