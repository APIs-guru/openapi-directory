import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { SavingsPlanPaymentOptionEnum } from "./savingsplanpaymentoptionenum";
import { SavingsPlanTypeEnum } from "./savingsplantypeenum";
import { SavingsPlanProductTypeEnum } from "./savingsplanproducttypeenum";


// SavingsPlanOffering
/** 
 * Information about a Savings Plan offering.
**/
export class SavingsPlanOffering extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyCodeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=durationSeconds" })
  durationSeconds?: number;

  @Metadata({ data: "json, name=offeringId" })
  offeringId?: string;

  @Metadata({ data: "json, name=operation" })
  operation?: string;

  @Metadata({ data: "json, name=paymentOption" })
  paymentOption?: SavingsPlanPaymentOptionEnum;

  @Metadata({ data: "json, name=planType" })
  planType?: SavingsPlanTypeEnum;

  @Metadata({ data: "json, name=productTypes" })
  productTypes?: SavingsPlanProductTypeEnum[];

  @Metadata({ data: "json, name=properties" })
  properties?: any;

  @Metadata({ data: "json, name=serviceCode" })
  serviceCode?: string;

  @Metadata({ data: "json, name=usageType" })
  usageType?: string;
}
