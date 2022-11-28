from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsCodeBuildProjectDetails:
    r"""AwsCodeBuildProjectDetails
    Information about an CodeBuild project.
    """
    
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionKey') }})
    environment: Optional[AwsCodeBuildProjectEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRole') }})
    source: Optional[AwsCodeBuildProjectSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    vpc_config: Optional[AwsCodeBuildProjectVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
