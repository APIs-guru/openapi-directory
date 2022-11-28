from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDomainRequest:
    auth_mode: AuthModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthMode') }})
    default_user_settings: UserSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultUserSettings') }})
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    subnet_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    vpc_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    app_network_access_type: Optional[AppNetworkAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppNetworkAccessType') }})
    home_efs_file_system_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeEfsFileSystemKmsKeyId') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
