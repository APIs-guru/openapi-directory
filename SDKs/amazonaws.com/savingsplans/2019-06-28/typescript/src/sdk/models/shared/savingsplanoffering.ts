import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { SavingsPlanPaymentOptionEnum } from "./savingsplanpaymentoptionenum";
import { SavingsPlanTypeEnum } from "./savingsplantypeenum";
import { SavingsPlanProductTypeEnum } from "./savingsplanproducttypeenum";



// SavingsPlanOffering
/** 
 * Information about a Savings Plan offering.
**/
export class SavingsPlanOffering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=durationSeconds" })
  durationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=offeringId" })
  offeringId?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentOption" })
  paymentOption?: SavingsPlanPaymentOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=planType" })
  planType?: SavingsPlanTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=productTypes" })
  productTypes?: SavingsPlanProductTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: any;

  @SpeakeasyMetadata({ data: "json, name=serviceCode" })
  serviceCode?: string;

  @SpeakeasyMetadata({ data: "json, name=usageType" })
  usageType?: string;
}
