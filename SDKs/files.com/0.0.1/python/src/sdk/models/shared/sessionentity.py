from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SessionEntity:
    r"""SessionEntity
    Create user session (log in)
    """
    
    allowed_2fa_method_sms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_2fa_method_sms') }})
    allowed_2fa_method_totp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_2fa_method_totp') }})
    allowed_2fa_method_u2f: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_2fa_method_u2f') }})
    allowed_2fa_method_yubi: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_2fa_method_yubi') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    login_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login_token') }})
    login_token_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login_token_domain') }})
    max_dir_listing_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_dir_listing_size') }})
    multiple_regions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiple_regions') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read_only') }})
    root_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root_path') }})
    site_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_id') }})
    ssl_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl_required') }})
    tls_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls_disabled') }})
    two_factor_setup_needed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('two_factor_setup_needed') }})
    use_provided_modified_at: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_provided_modified_at') }})
    windows_mode_ftp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windows_mode_ftp') }})
    
