import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SavingsPlanProductTypeEnum } from "./savingsplanproducttypeenum";
import { ParentSavingsPlanOffering } from "./parentsavingsplanoffering";
import { SavingsPlanRateServiceCodeEnum } from "./savingsplanrateservicecodeenum";
import { SavingsPlanRateUnitEnum } from "./savingsplanrateunitenum";


// SavingsPlanOfferingRate
/** 
 * Information about a Savings Plan offering rate.
**/
export class SavingsPlanOfferingRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=operation" })
  operation?: string;

  @Metadata({ data: "json, name=productType" })
  productType?: SavingsPlanProductTypeEnum;

  @Metadata({ data: "json, name=properties" })
  properties?: any;

  @Metadata({ data: "json, name=rate" })
  rate?: string;

  @Metadata({ data: "json, name=savingsPlanOffering" })
  savingsPlanOffering?: ParentSavingsPlanOffering;

  @Metadata({ data: "json, name=serviceCode" })
  serviceCode?: SavingsPlanRateServiceCodeEnum;

  @Metadata({ data: "json, name=unit" })
  unit?: SavingsPlanRateUnitEnum;

  @Metadata({ data: "json, name=usageType" })
  usageType?: string;
}
