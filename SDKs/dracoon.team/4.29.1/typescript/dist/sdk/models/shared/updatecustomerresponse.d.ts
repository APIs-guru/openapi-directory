import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerAttributes } from "./customerattributes";
export declare enum UpdateCustomerResponseCustomerContractTypeEnum {
    Demo = "demo",
    Free = "free",
    Pay = "pay"
}
/**
 * Customer information
**/
export declare class UpdateCustomerResponse extends SpeakeasyBase {
    activationCode?: string;
    companyName: string;
    createdAt?: Date;
    customerAttributes?: CustomerAttributes;
    customerContractType: UpdateCustomerResponseCustomerContractTypeEnum;
    customerUuid: string;
    id: number;
    isLocked?: boolean;
    lockStatus: boolean;
    providerCustomerId?: string;
    quotaMax: number;
    trialDays?: number;
    updatedAt?: Date;
    userMax: number;
    webhooksMax?: number;
}
