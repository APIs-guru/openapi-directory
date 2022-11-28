import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionalTaxRateInfo } from "./regionaltaxrateinfo";


export enum ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum {
    WithdrawalRightTypeUnspecified = "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    WithdrawalRightDigitalContent = "WITHDRAWAL_RIGHT_DIGITAL_CONTENT",
    WithdrawalRightService = "WITHDRAWAL_RIGHT_SERVICE"
}


// ManagedProductTaxAndComplianceSettings
/** 
 * Details about taxation and legal compliance for managed products.
**/
export class ManagedProductTaxAndComplianceSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eeaWithdrawalRightType" })
  eeaWithdrawalRightType?: ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=taxRateInfoByRegionCode", elemType: RegionalTaxRateInfo })
  taxRateInfoByRegionCode?: Map<string, RegionalTaxRateInfo>;
}
