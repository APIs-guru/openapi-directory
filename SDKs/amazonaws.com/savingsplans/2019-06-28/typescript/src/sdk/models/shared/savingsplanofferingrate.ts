import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlanProductTypeEnum } from "./savingsplanproducttypeenum";
import { ParentSavingsPlanOffering } from "./parentsavingsplanoffering";
import { SavingsPlanRateServiceCodeEnum } from "./savingsplanrateservicecodeenum";
import { SavingsPlanRateUnitEnum } from "./savingsplanrateunitenum";



// SavingsPlanOfferingRate
/** 
 * Information about a Savings Plan offering rate.
**/
export class SavingsPlanOfferingRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "json, name=productType" })
  productType?: SavingsPlanProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: any;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: string;

  @SpeakeasyMetadata({ data: "json, name=savingsPlanOffering" })
  savingsPlanOffering?: ParentSavingsPlanOffering;

  @SpeakeasyMetadata({ data: "json, name=serviceCode" })
  serviceCode?: SavingsPlanRateServiceCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: SavingsPlanRateUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=usageType" })
  usageType?: string;
}
