from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import chefconfiguration
from . import stackconfigurationmanager
from . import source
from . import rootdevicetype_enum


@dataclass_json
@dataclass
class UpdateStackRequest:
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentVersion' }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    chef_configuration: Optional[chefconfiguration.ChefConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChefConfiguration' }})
    configuration_manager: Optional[stackconfigurationmanager.StackConfigurationManager] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationManager' }})
    custom_cookbooks_source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomCookbooksSource' }})
    custom_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomJson' }})
    default_availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultAvailabilityZone' }})
    default_instance_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultInstanceProfileArn' }})
    default_os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultOs' }})
    default_root_device_type: Optional[rootdevicetype_enum.RootDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultRootDeviceType' }})
    default_ssh_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultSshKeyName' }})
    default_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultSubnetId' }})
    hostname_theme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostnameTheme' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRoleArn' }})
    stack_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    use_custom_cookbooks: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseCustomCookbooks' }})
    use_opsworks_security_groups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseOpsworksSecurityGroups' }})
    
