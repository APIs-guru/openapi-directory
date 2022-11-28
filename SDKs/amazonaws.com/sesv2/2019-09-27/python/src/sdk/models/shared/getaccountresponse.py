from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAccountResponse:
    r"""GetAccountResponse
    A list of details about the email-sending capabilities of your Amazon SES account in the current AWS Region.
    """
    
    dedicated_ip_auto_warmup_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedIpAutoWarmupEnabled') }})
    details: Optional[AccountDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Details') }})
    enforcement_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnforcementStatus') }})
    production_access_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductionAccessEnabled') }})
    send_quota: Optional[SendQuota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendQuota') }})
    sending_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendingEnabled') }})
    suppression_attributes: Optional[SuppressionAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressionAttributes') }})
    
