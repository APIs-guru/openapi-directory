import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { SavingsPlanPaymentOptionEnum } from "./savingsplanpaymentoptionenum";
import { SavingsPlanProductTypeEnum } from "./savingsplanproducttypeenum";
import { SavingsPlanTypeEnum } from "./savingsplantypeenum";
import { SavingsPlanStateEnum } from "./savingsplanstateenum";



// SavingsPlan
/** 
 * Information about a Savings Plan.
**/
export class SavingsPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitment" })
  commitment?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ec2InstanceFamily" })
  ec2InstanceFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=offeringId" })
  offeringId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentOption" })
  paymentOption?: SavingsPlanPaymentOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=productTypes" })
  productTypes?: SavingsPlanProductTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=recurringPaymentAmount" })
  recurringPaymentAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=savingsPlanArn" })
  savingsPlanArn?: string;

  @SpeakeasyMetadata({ data: "json, name=savingsPlanId" })
  savingsPlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=savingsPlanType" })
  savingsPlanType?: SavingsPlanTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SavingsPlanStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=termDurationInSeconds" })
  termDurationInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=upfrontPaymentAmount" })
  upfrontPaymentAmount?: string;
}
