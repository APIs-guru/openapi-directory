import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
export declare enum LocationStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Other = "other"
}
export declare class LocationInput extends SpeakeasyBase {
    address?: Address;
    businessName?: string;
    currency?: CurrencyEnum;
    merchantId?: string;
    name?: string;
    status?: LocationStatusEnum;
}
export declare class Location extends SpeakeasyBase {
    address?: Address;
    businessName?: string;
    createdAt?: Date;
    createdBy?: string;
    currency?: CurrencyEnum;
    id?: string;
    merchantId?: string;
    name?: string;
    status?: LocationStatusEnum;
    updatedAt?: Date;
    updatedBy?: string;
}
