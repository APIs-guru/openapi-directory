import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionalTaxRateInfo } from "./regionaltaxrateinfo";


export enum SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum {
    WithdrawalRightTypeUnspecified = "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    WithdrawalRightDigitalContent = "WITHDRAWAL_RIGHT_DIGITAL_CONTENT",
    WithdrawalRightService = "WITHDRAWAL_RIGHT_SERVICE"
}


// SubscriptionTaxAndComplianceSettings
/** 
 * Details about taxation, Google Play policy and legal compliance for subscription products.
**/
export class SubscriptionTaxAndComplianceSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eeaWithdrawalRightType" })
  eeaWithdrawalRightType?: SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=taxRateInfoByRegionCode", elemType: RegionalTaxRateInfo })
  taxRateInfoByRegionCode?: Map<string, RegionalTaxRateInfo>;
}
