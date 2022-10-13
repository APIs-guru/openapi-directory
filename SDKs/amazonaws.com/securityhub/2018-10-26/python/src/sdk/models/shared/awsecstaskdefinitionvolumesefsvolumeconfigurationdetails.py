from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsecstaskdefinitionvolumesefsvolumeconfigurationauthorizationconfigdetails


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails:
    authorization_config: Optional[awsecstaskdefinitionvolumesefsvolumeconfigurationauthorizationconfigdetails.AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizationConfig' }})
    filesystem_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilesystemId' }})
    root_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootDirectory' }})
    transit_encryption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransitEncryption' }})
    transit_encryption_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransitEncryptionPort' }})
    
