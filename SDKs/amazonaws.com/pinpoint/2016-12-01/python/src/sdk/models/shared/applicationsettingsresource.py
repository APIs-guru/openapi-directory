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
class ApplicationSettingsResource:
    r"""ApplicationSettingsResource
    Provides information about an application, including the default settings for an application.
    """
    
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    campaign_hook: Optional[CampaignHook] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CampaignHook') }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    limits: Optional[CampaignLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limits') }})
    quiet_time: Optional[QuietTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuietTime') }})
    
