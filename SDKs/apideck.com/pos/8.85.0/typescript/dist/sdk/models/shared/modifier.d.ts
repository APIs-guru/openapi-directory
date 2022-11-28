import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
export declare class ModifierInput extends SpeakeasyBase {
    alternateName?: string;
    available?: boolean;
    currency?: CurrencyEnum;
    idempotencyKey?: string;
    modifierGroupId: string;
    name: string;
    priceAmount?: number;
}
export declare class Modifier extends SpeakeasyBase {
    alternateName?: string;
    available?: boolean;
    createdAt?: Date;
    createdBy?: string;
    currency?: CurrencyEnum;
    id?: string;
    idempotencyKey?: string;
    modifierGroupId: string;
    name: string;
    priceAmount?: number;
    updatedAt?: Date;
    updatedBy?: string;
}
