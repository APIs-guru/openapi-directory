import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
export declare enum ItemPricingTypeEnum {
    Fixed = "fixed",
    Variable = "variable",
    PerUnit = "per_unit",
    Other = "other"
}
export declare enum ItemProductTypeEnum {
    Regular = "regular",
    Other = "other"
}
export declare class Item extends SpeakeasyBase {
    abbreviation?: string;
    absentAtLocationIds?: string[];
    available?: boolean;
    availableForPickup?: boolean;
    availableOnline?: boolean;
    categories?: any[];
    code?: string;
    cost?: number;
    createdAt?: Date;
    createdBy?: string;
    deleted?: boolean;
    description?: string;
    hidden?: boolean;
    id?: string;
    idempotencyKey?: string;
    modifierGroups?: any[];
    name: string;
    options?: any[];
    presentAtAllLocations?: boolean;
    priceAmount?: number;
    priceCurrency?: CurrencyEnum;
    pricingType?: ItemPricingTypeEnum;
    productType?: ItemProductTypeEnum;
    sku?: string;
    taxIds?: string[];
    updatedAt?: Date;
    updatedBy?: string;
    variations?: any[];
    version?: string;
}
export declare class ItemInput extends SpeakeasyBase {
    abbreviation?: string;
    absentAtLocationIds?: string[];
    available?: boolean;
    availableForPickup?: boolean;
    availableOnline?: boolean;
    categories?: any[];
    code?: string;
    cost?: number;
    deleted?: boolean;
    description?: string;
    hidden?: boolean;
    id?: string;
    idempotencyKey?: string;
    modifierGroups?: any[];
    name: string;
    options?: any[];
    presentAtAllLocations?: boolean;
    priceAmount?: number;
    priceCurrency?: CurrencyEnum;
    pricingType?: ItemPricingTypeEnum;
    productType?: ItemProductTypeEnum;
    sku?: string;
    taxIds?: string[];
    variations?: any[];
}
