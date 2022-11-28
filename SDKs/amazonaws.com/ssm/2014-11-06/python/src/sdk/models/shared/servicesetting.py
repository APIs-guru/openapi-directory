from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceSetting:
    r"""ServiceSetting
    <p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of \"false\". This means the user can't use this feature unless they change the setting to \"true\" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p>
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ARN') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedUser') }})
    setting_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SettingId') }})
    setting_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SettingValue') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
