import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerAttributes } from "./customerattributes";
import { FirstAdminUser } from "./firstadminuser";
export declare enum NewCustomerRequestCustomerContractTypeEnum {
    Demo = "demo",
    Free = "free",
    Pay = "pay"
}
/**
 * Request model for creating a customer
**/
export declare class NewCustomerRequest extends SpeakeasyBase {
    activationCode?: string;
    companyName?: string;
    customerAttributes?: CustomerAttributes;
    customerContractType: NewCustomerRequestCustomerContractTypeEnum;
    firstAdminUser: FirstAdminUser;
    isLocked?: boolean;
    lockStatus?: boolean;
    providerCustomerId?: string;
    quotaMax: number;
    trialDays?: number;
    userMax: number;
    webhooksMax?: number;
}
