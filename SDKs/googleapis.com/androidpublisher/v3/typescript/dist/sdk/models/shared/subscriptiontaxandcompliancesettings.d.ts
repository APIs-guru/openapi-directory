import { SpeakeasyBase } from "../../../internal/utils";
import { RegionalTaxRateInfo } from "./regionaltaxrateinfo";
export declare enum SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum {
    WithdrawalRightTypeUnspecified = "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    WithdrawalRightDigitalContent = "WITHDRAWAL_RIGHT_DIGITAL_CONTENT",
    WithdrawalRightService = "WITHDRAWAL_RIGHT_SERVICE"
}
/**
 * Details about taxation, Google Play policy and legal compliance for subscription products.
**/
export declare class SubscriptionTaxAndComplianceSettings extends SpeakeasyBase {
    eeaWithdrawalRightType?: SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
    taxRateInfoByRegionCode?: Map<string, RegionalTaxRateInfo>;
}
