from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import regionaltaxrateinfo

class SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum(str, Enum):
    WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED = "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED"
    WITHDRAWAL_RIGHT_DIGITAL_CONTENT = "WITHDRAWAL_RIGHT_DIGITAL_CONTENT"
    WITHDRAWAL_RIGHT_SERVICE = "WITHDRAWAL_RIGHT_SERVICE"


@dataclass_json
@dataclass
class SubscriptionTaxAndComplianceSettings:
    eea_withdrawal_right_type: Optional[SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eeaWithdrawalRightType' }})
    tax_rate_info_by_region_code: Optional[dict[str, regionaltaxrateinfo.RegionalTaxRateInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxRateInfoByRegionCode' }})
    
