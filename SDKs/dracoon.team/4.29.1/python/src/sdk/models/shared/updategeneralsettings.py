from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateGeneralSettings:
    r"""UpdateGeneralSettings
    Request model for updating general settings
    """
    
    auth_token_restrictions: Optional[UpdateAuthTokenRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authTokenRestrictions') }})
    crypto_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoEnabled') }})
    email_notification_button_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailNotificationButtonEnabled') }})
    eula_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eulaEnabled') }})
    hide_login_input_fields: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideLoginInputFields') }})
    media_server_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaServerEnabled') }})
    s3_tags_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3TagsEnabled') }})
    share_password_sms_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharePasswordSmsEnabled') }})
    weak_password_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weakPasswordEnabled') }})
    
