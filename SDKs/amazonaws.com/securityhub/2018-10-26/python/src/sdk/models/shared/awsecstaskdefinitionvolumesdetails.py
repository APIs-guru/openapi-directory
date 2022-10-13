from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsecstaskdefinitionvolumesdockervolumeconfigurationdetails
from . import awsecstaskdefinitionvolumesefsvolumeconfigurationdetails
from . import awsecstaskdefinitionvolumeshostdetails


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionVolumesDetails:
    docker_volume_configuration: Optional[awsecstaskdefinitionvolumesdockervolumeconfigurationdetails.AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DockerVolumeConfiguration' }})
    efs_volume_configuration: Optional[awsecstaskdefinitionvolumesefsvolumeconfigurationdetails.AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EfsVolumeConfiguration' }})
    host: Optional[awsecstaskdefinitionvolumeshostdetails.AwsEcsTaskDefinitionVolumesHostDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Host' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
