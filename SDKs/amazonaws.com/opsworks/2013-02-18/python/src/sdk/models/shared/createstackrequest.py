from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateStackRequest:
    default_instance_profile_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultInstanceProfileArn') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    service_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRoleArn') }})
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentVersion') }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    chef_configuration: Optional[ChefConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChefConfiguration') }})
    configuration_manager: Optional[StackConfigurationManager] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationManager') }})
    custom_cookbooks_source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomCookbooksSource') }})
    custom_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomJson') }})
    default_availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultAvailabilityZone') }})
    default_os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultOs') }})
    default_root_device_type: Optional[RootDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultRootDeviceType') }})
    default_ssh_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultSshKeyName') }})
    default_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultSubnetId') }})
    hostname_theme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostnameTheme') }})
    use_custom_cookbooks: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseCustomCookbooks') }})
    use_opsworks_security_groups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseOpsworksSecurityGroups') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
