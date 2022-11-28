import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerAttributes } from "./customerattributes";
import { FirstAdminUser } from "./firstadminuser";
export declare enum NewCustomerResponseCustomerContractTypeEnum {
    Demo = "demo",
    Free = "free",
    Pay = "pay"
}
/**
 * Customer information
**/
export declare class NewCustomerResponse extends SpeakeasyBase {
    activationCode?: string;
    companyName: string;
    createdAt?: Date;
    customerAttributes?: CustomerAttributes;
    customerContractType: NewCustomerResponseCustomerContractTypeEnum;
    customerUuid: string;
    firstAdminUser: FirstAdminUser;
    id?: number;
    isLocked?: boolean;
    lockStatus: boolean;
    providerCustomerId?: string;
    quotaMax: number;
    trialDays?: number;
    userMax: number;
    webhooksMax?: number;
}
