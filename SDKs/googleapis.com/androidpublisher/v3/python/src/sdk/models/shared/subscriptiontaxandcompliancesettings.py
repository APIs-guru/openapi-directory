from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum(str, Enum):
    WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED = "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED"
    WITHDRAWAL_RIGHT_DIGITAL_CONTENT = "WITHDRAWAL_RIGHT_DIGITAL_CONTENT"
    WITHDRAWAL_RIGHT_SERVICE = "WITHDRAWAL_RIGHT_SERVICE"


@dataclass_json
@dataclass
class SubscriptionTaxAndComplianceSettings:
    r"""SubscriptionTaxAndComplianceSettings
    Details about taxation, Google Play policy and legal compliance for subscription products.
    """
    
    eea_withdrawal_right_type: Optional[SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eeaWithdrawalRightType') }})
    tax_rate_info_by_region_code: Optional[dict[str, RegionalTaxRateInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxRateInfoByRegionCode') }})
    
