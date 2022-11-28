import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
export declare enum ServiceChargeTypeEnum {
    AutoGratuity = "auto_gratuity",
    Custom = "custom"
}
export declare class ServiceChargeInput extends SpeakeasyBase {
    active?: boolean;
    amount?: number;
    currency?: CurrencyEnum;
    name?: string;
    percentage?: number;
    type?: ServiceChargeTypeEnum;
}
export declare class ServiceCharge extends SpeakeasyBase {
    active?: boolean;
    amount?: number;
    currency?: CurrencyEnum;
    id?: string;
    name?: string;
    percentage?: number;
    type?: ServiceChargeTypeEnum;
}
