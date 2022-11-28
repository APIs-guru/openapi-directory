from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SystemInfo:
    r"""SystemInfo
    System information (default language and authentication methods)
    """
    
    auth_methods: List[AuthMethod] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMethods') }})
    hide_login_input_fields: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideLoginInputFields') }})
    language_default: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageDefault') }})
    s3_enforce_direct_upload: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3EnforceDirectUpload') }})
    s3_hosts: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Hosts') }})
    use_s3_storage: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('useS3Storage') }})
    
