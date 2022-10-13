from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import s3location
from . import scripttype_enum
from . import server
from . import userdata


@dataclass_json
@dataclass
class ServerLaunchConfiguration:
    associate_public_ip_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatePublicIpAddress' }})
    configure_script: Optional[s3location.S3Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configureScript' }})
    configure_script_type: Optional[scripttype_enum.ScriptTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configureScriptType' }})
    ec2_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2KeyName' }})
    iam_instance_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamInstanceProfileName' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    logical_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logicalId' }})
    security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroup' }})
    server: Optional[server.Server] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet' }})
    user_data: Optional[userdata.UserData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userData' }})
    vpc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc' }})
    
