import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { ServiceCharge } from "./servicecharge";
import { ServiceChargeInput } from "./servicecharge";
export declare enum MerchantStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Other = "other"
}
export declare class Merchant extends SpeakeasyBase {
    address?: Address;
    createdAt?: Date;
    createdBy?: string;
    currency?: CurrencyEnum;
    id?: string;
    language?: string;
    mainLocationId?: string;
    name?: string;
    ownerId?: string;
    serviceCharges?: ServiceCharge[];
    status?: MerchantStatusEnum;
    updatedAt?: Date;
    updatedBy?: string;
}
export declare class MerchantInput extends SpeakeasyBase {
    address?: Address;
    currency?: CurrencyEnum;
    language?: string;
    mainLocationId?: string;
    name?: string;
    ownerId?: string;
    serviceCharges?: ServiceChargeInput[];
    status?: MerchantStatusEnum;
}
