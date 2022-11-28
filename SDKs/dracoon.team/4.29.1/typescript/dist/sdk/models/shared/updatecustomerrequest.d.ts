import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpdateCustomerRequestCustomerContractTypeEnum {
    Demo = "demo",
    Free = "free",
    Pay = "pay"
}
/**
 * Request model for updating a customer
**/
export declare class UpdateCustomerRequest extends SpeakeasyBase {
    companyName?: string;
    customerContractType: UpdateCustomerRequestCustomerContractTypeEnum;
    isLocked?: boolean;
    lockStatus?: boolean;
    providerCustomerId?: string;
    quotaMax?: number;
    userMax?: number;
    webhooksMax?: number;
}
