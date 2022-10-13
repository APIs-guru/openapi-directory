from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awscodebuildprojectenvironment
from . import awscodebuildprojectsource
from . import awscodebuildprojectvpcconfig


@dataclass_json
@dataclass
class AwsCodeBuildProjectDetails:
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionKey' }})
    environment: Optional[awscodebuildprojectenvironment.AwsCodeBuildProjectEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRole' }})
    source: Optional[awscodebuildprojectsource.AwsCodeBuildProjectSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    vpc_config: Optional[awscodebuildprojectvpcconfig.AwsCodeBuildProjectVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
