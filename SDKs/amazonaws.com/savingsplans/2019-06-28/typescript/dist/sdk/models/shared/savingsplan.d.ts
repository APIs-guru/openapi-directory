import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { SavingsPlanPaymentOptionEnum } from "./savingsplanpaymentoptionenum";
import { SavingsPlanProductTypeEnum } from "./savingsplanproducttypeenum";
import { SavingsPlanTypeEnum } from "./savingsplantypeenum";
import { SavingsPlanStateEnum } from "./savingsplanstateenum";
/**
 * Information about a Savings Plan.
**/
export declare class SavingsPlan extends SpeakeasyBase {
    commitment?: string;
    currency?: CurrencyCodeEnum;
    description?: string;
    ec2InstanceFamily?: string;
    end?: string;
    offeringId?: string;
    paymentOption?: SavingsPlanPaymentOptionEnum;
    productTypes?: SavingsPlanProductTypeEnum[];
    recurringPaymentAmount?: string;
    region?: string;
    savingsPlanArn?: string;
    savingsPlanId?: string;
    savingsPlanType?: SavingsPlanTypeEnum;
    start?: string;
    state?: SavingsPlanStateEnum;
    tags?: Map<string, string>;
    termDurationInSeconds?: number;
    upfrontPaymentAmount?: string;
}
