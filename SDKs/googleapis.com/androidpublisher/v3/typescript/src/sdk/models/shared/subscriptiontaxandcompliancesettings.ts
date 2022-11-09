import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegionalTaxRateInfo } from "./regionaltaxrateinfo";

export enum SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum {
    WithdrawalRightTypeUnspecified = "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED"
,    WithdrawalRightDigitalContent = "WITHDRAWAL_RIGHT_DIGITAL_CONTENT"
,    WithdrawalRightService = "WITHDRAWAL_RIGHT_SERVICE"
}


// SubscriptionTaxAndComplianceSettings
/** 
 * Details about taxation, Google Play policy and legal compliance for subscription products.
**/
export class SubscriptionTaxAndComplianceSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=eeaWithdrawalRightType" })
  eeaWithdrawalRightType?: SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;

  @Metadata({ data: "json, name=taxRateInfoByRegionCode", elemType: shared.RegionalTaxRateInfo })
  taxRateInfoByRegionCode?: Map<string, RegionalTaxRateInfo>;
}
