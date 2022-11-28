import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { SavingsPlanPaymentOptionEnum } from "./savingsplanpaymentoptionenum";
import { SavingsPlanTypeEnum } from "./savingsplantypeenum";



// ParentSavingsPlanOffering
/** 
 * Information about a Savings Plan offering.
**/
export class ParentSavingsPlanOffering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=durationSeconds" })
  durationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=offeringId" })
  offeringId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentOption" })
  paymentOption?: SavingsPlanPaymentOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=planDescription" })
  planDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=planType" })
  planType?: SavingsPlanTypeEnum;
}
