from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsCodeBuildProjectEnvironment:
    r"""AwsCodeBuildProjectEnvironment
    Information about the build environment for this build project.
    """
    
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    image_pull_credentials_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImagePullCredentialsType') }})
    registry_credential: Optional[AwsCodeBuildProjectEnvironmentRegistryCredential] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistryCredential') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
