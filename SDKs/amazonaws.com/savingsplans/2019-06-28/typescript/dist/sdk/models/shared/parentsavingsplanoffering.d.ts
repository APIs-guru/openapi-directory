import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { SavingsPlanPaymentOptionEnum } from "./savingsplanpaymentoptionenum";
import { SavingsPlanTypeEnum } from "./savingsplantypeenum";
/**
 * Information about a Savings Plan offering.
**/
export declare class ParentSavingsPlanOffering extends SpeakeasyBase {
    currency?: CurrencyCodeEnum;
    durationSeconds?: number;
    offeringId?: string;
    paymentOption?: SavingsPlanPaymentOptionEnum;
    planDescription?: string;
    planType?: SavingsPlanTypeEnum;
}
