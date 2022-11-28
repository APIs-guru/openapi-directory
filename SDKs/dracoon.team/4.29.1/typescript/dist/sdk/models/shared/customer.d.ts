import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerAttributes } from "./customerattributes";
export declare enum CustomerCustomerContractTypeEnum {
    Demo = "demo",
    Free = "free",
    Pay = "pay"
}
/**
 * Customer information
**/
export declare class Customer extends SpeakeasyBase {
    activationCode?: string;
    companyName: string;
    createdAt: Date;
    customerAttributes?: CustomerAttributes;
    customerContractType: CustomerCustomerContractTypeEnum;
    customerUuid: string;
    id: number;
    isLocked?: boolean;
    lastLoginAt?: Date;
    lockStatus: boolean;
    providerCustomerId?: string;
    quotaMax: number;
    quotaUsed: number;
    trialDaysLeft?: number;
    updatedAt?: Date;
    userMax: number;
    userUsed: number;
    webhooksMax?: number;
}
