import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
export declare enum ProductDetailsApiModelStatusEnum {
    Active = "Active",
    NotAvailable = "NotAvailable",
    Inactive = "Inactive"
}
export declare class ProductDetailsApiModel extends SpeakeasyBase {
    accessToken?: string;
    afterPaymentDescription?: string;
    buttonCallToAction?: string;
    currency?: CurrencyDetailsApiModel;
    currencyId?: number;
    description?: string;
    id?: number;
    isFeatured?: boolean;
    name?: string;
    shippingAmount?: number;
    shippingDescription?: string;
    status?: ProductDetailsApiModelStatusEnum;
    subTotalAmount?: number;
    totalAmount?: number;
    totalWithShipping?: number;
    whatHappensNextDescription?: string;
}
