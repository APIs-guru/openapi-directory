from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import appnetworkaccesstype_enum
from . import authmode_enum
from . import usersettings
from . import tag


@dataclass_json
@dataclass
class CreateDomainRequest:
    app_network_access_type: Optional[appnetworkaccesstype_enum.AppNetworkAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppNetworkAccessType' }})
    auth_mode: authmode_enum.AuthModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthMode' }})
    default_user_settings: usersettings.UserSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultUserSettings' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    home_efs_file_system_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeEfsFileSystemKmsKeyId' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    subnet_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
