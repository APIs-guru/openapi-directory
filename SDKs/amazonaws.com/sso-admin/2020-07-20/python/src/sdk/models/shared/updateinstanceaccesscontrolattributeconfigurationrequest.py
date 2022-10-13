from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import instanceaccesscontrolattributeconfiguration


@dataclass_json
@dataclass
class UpdateInstanceAccessControlAttributeConfigurationRequest:
    instance_access_control_attribute_configuration: instanceaccesscontrolattributeconfiguration.InstanceAccessControlAttributeConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceAccessControlAttributeConfiguration' }})
    instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceArn' }})
    
