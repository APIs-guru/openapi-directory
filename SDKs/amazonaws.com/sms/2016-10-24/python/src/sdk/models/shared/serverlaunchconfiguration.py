from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServerLaunchConfiguration:
    r"""ServerLaunchConfiguration
    Launch configuration for a server.
    """
    
    associate_public_ip_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatePublicIpAddress') }})
    configure_script: Optional[S3Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configureScript') }})
    configure_script_type: Optional[ScriptTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configureScriptType') }})
    ec2_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2KeyName') }})
    iam_instance_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamInstanceProfileName') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    logical_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalId') }})
    security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroup') }})
    server: Optional[Server] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    user_data: Optional[UserData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    vpc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc') }})
    
