import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { SavingsPlanProductTypeEnum } from "./savingsplanproducttypeenum";
import { SavingsPlanRateServiceCodeEnum } from "./savingsplanrateservicecodeenum";
import { SavingsPlanRateUnitEnum } from "./savingsplanrateunitenum";



// SavingsPlanRate
/** 
 * Information about a Savings Plan rate.
**/
export class SavingsPlanRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "json, name=productType" })
  productType?: SavingsPlanProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: any;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceCode" })
  serviceCode?: SavingsPlanRateServiceCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: SavingsPlanRateUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=usageType" })
  usageType?: string;
}
