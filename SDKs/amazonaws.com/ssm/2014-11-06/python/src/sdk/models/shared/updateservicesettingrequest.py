from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateServiceSettingRequest:
    r"""UpdateServiceSettingRequest
    The request body of the UpdateServiceSetting API operation.
    """
    
    setting_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SettingId') }})
    setting_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SettingValue') }})
    
