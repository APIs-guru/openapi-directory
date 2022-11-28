import { SpeakeasyBase } from "../../../internal/utils";
import { RegionalTaxRateInfo } from "./regionaltaxrateinfo";
export declare enum ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum {
    WithdrawalRightTypeUnspecified = "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    WithdrawalRightDigitalContent = "WITHDRAWAL_RIGHT_DIGITAL_CONTENT",
    WithdrawalRightService = "WITHDRAWAL_RIGHT_SERVICE"
}
/**
 * Details about taxation and legal compliance for managed products.
**/
export declare class ManagedProductTaxAndComplianceSettings extends SpeakeasyBase {
    eeaWithdrawalRightType?: ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
    taxRateInfoByRegionCode?: Map<string, RegionalTaxRateInfo>;
}
