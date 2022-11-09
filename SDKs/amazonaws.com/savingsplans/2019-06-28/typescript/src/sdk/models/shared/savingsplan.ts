import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=commitment" })
  commitment?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyCodeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ec2InstanceFamily" })
  ec2InstanceFamily?: string;

  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=offeringId" })
  offeringId?: string;

  @Metadata({ data: "json, name=paymentOption" })
  paymentOption?: SavingsPlanPaymentOptionEnum;

  @Metadata({ data: "json, name=productTypes" })
  productTypes?: SavingsPlanProductTypeEnum[];

  @Metadata({ data: "json, name=recurringPaymentAmount" })
  recurringPaymentAmount?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=savingsPlanArn" })
  savingsPlanArn?: string;

  @Metadata({ data: "json, name=savingsPlanId" })
  savingsPlanId?: string;

  @Metadata({ data: "json, name=savingsPlanType" })
  savingsPlanType?: SavingsPlanTypeEnum;

  @Metadata({ data: "json, name=start" })
  start?: string;

  @Metadata({ data: "json, name=state" })
  state?: SavingsPlanStateEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=termDurationInSeconds" })
  termDurationInSeconds?: number;

  @Metadata({ data: "json, name=upfrontPaymentAmount" })
  upfrontPaymentAmount?: string;
}
