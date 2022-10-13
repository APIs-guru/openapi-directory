from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import authmethod


@dataclass_json
@dataclass
class SystemInfo:
    auth_methods: List[authmethod.AuthMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authMethods' }})
    hide_login_input_fields: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideLoginInputFields' }})
    language_default: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageDefault' }})
    s3_enforce_direct_upload: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3EnforceDirectUpload' }})
    s3_hosts: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Hosts' }})
    use_s3_storage: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useS3Storage' }})
    
