from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateSystemDefaults:
    r"""UpdateSystemDefaults
    Request model for updating system defaults
    """
    
    download_share_default_expiration_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadShareDefaultExpirationPeriod') }})
    file_default_expiration_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileDefaultExpirationPeriod') }})
    language_default: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageDefault') }})
    nonmember_viewer_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonmemberViewerDefault') }})
    upload_share_default_expiration_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadShareDefaultExpirationPeriod') }})
    
