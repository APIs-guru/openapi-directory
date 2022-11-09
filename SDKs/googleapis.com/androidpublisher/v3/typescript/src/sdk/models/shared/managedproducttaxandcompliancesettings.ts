import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegionalTaxRateInfo } from "./regionaltaxrateinfo";

export enum ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum {
    WithdrawalRightTypeUnspecified = "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED"
,    WithdrawalRightDigitalContent = "WITHDRAWAL_RIGHT_DIGITAL_CONTENT"
,    WithdrawalRightService = "WITHDRAWAL_RIGHT_SERVICE"
}


// ManagedProductTaxAndComplianceSettings
/** 
 * Details about taxation and legal compliance for managed products.
**/
export class ManagedProductTaxAndComplianceSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=eeaWithdrawalRightType" })
  eeaWithdrawalRightType?: ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;

  @Metadata({ data: "json, name=taxRateInfoByRegionCode", elemType: shared.RegionalTaxRateInfo })
  taxRateInfoByRegionCode?: Map<string, RegionalTaxRateInfo>;
}
