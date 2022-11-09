import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { SavingsPlanProductTypeEnum } from "./savingsplanproducttypeenum";
import { SavingsPlanRateServiceCodeEnum } from "./savingsplanrateservicecodeenum";
import { SavingsPlanRateUnitEnum } from "./savingsplanrateunitenum";


// SavingsPlanRate
/** 
 * Information about a Savings Plan rate.
**/
export class SavingsPlanRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyCodeEnum;

  @Metadata({ data: "json, name=operation" })
  operation?: string;

  @Metadata({ data: "json, name=productType" })
  productType?: SavingsPlanProductTypeEnum;

  @Metadata({ data: "json, name=properties" })
  properties?: any;

  @Metadata({ data: "json, name=rate" })
  rate?: string;

  @Metadata({ data: "json, name=serviceCode" })
  serviceCode?: SavingsPlanRateServiceCodeEnum;

  @Metadata({ data: "json, name=unit" })
  unit?: SavingsPlanRateUnitEnum;

  @Metadata({ data: "json, name=usageType" })
  usageType?: string;
}
