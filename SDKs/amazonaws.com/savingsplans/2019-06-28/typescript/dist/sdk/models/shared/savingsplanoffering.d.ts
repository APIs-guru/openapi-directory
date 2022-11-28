import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { SavingsPlanPaymentOptionEnum } from "./savingsplanpaymentoptionenum";
import { SavingsPlanTypeEnum } from "./savingsplantypeenum";
import { SavingsPlanProductTypeEnum } from "./savingsplanproducttypeenum";
/**
 * Information about a Savings Plan offering.
**/
export declare class SavingsPlanOffering extends SpeakeasyBase {
    currency?: CurrencyCodeEnum;
    description?: string;
    durationSeconds?: number;
    offeringId?: string;
    operation?: string;
    paymentOption?: SavingsPlanPaymentOptionEnum;
    planType?: SavingsPlanTypeEnum;
    productTypes?: SavingsPlanProductTypeEnum[];
    properties?: any;
    serviceCode?: string;
    usageType?: string;
}
