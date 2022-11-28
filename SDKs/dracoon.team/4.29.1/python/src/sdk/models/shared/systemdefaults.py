from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SystemDefaults:
    r"""SystemDefaults
    System defaults
    """
    
    download_share_default_expiration_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadShareDefaultExpirationPeriod') }})
    file_default_expiration_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileDefaultExpirationPeriod') }})
    hide_login_input_fields: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideLoginInputFields') }})
    language_default: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageDefault') }})
    nonmember_viewer_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonmemberViewerDefault') }})
    upload_share_default_expiration_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadShareDefaultExpirationPeriod') }})
    
