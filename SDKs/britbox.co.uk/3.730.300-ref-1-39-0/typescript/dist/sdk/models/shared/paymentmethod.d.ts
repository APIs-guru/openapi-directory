import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PaymentMethodBrandEnum {
    Visa = "Visa",
    MasterCard = "MasterCard",
    AmericanExpress = "AmericanExpress",
    Other = "Other"
}
export declare enum PaymentMethodTypeEnum {
    Card = "Card",
    Wallet = "Wallet"
}
export declare class PaymentMethod extends SpeakeasyBase {
    balance?: number;
    brand?: PaymentMethodBrandEnum;
    currency?: string;
    description: string;
    expiryMonth?: number;
    expiryYear?: number;
    id: string;
    lastDigits?: number;
    type: PaymentMethodTypeEnum;
}
