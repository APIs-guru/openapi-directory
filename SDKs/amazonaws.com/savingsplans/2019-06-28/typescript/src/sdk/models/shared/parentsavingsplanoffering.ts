import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { SavingsPlanPaymentOptionEnum } from "./savingsplanpaymentoptionenum";
import { SavingsPlanTypeEnum } from "./savingsplantypeenum";


// ParentSavingsPlanOffering
/** 
 * Information about a Savings Plan offering.
**/
export class ParentSavingsPlanOffering extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyCodeEnum;

  @Metadata({ data: "json, name=durationSeconds" })
  durationSeconds?: number;

  @Metadata({ data: "json, name=offeringId" })
  offeringId?: string;

  @Metadata({ data: "json, name=paymentOption" })
  paymentOption?: SavingsPlanPaymentOptionEnum;

  @Metadata({ data: "json, name=planDescription" })
  planDescription?: string;

  @Metadata({ data: "json, name=planType" })
  planType?: SavingsPlanTypeEnum;
}
