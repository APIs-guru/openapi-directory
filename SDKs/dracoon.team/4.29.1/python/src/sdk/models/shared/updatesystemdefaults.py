from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSystemDefaults:
    download_share_default_expiration_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadShareDefaultExpirationPeriod' }})
    file_default_expiration_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileDefaultExpirationPeriod' }})
    language_default: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageDefault' }})
    nonmember_viewer_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonmemberViewerDefault' }})
    upload_share_default_expiration_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadShareDefaultExpirationPeriod' }})
    
