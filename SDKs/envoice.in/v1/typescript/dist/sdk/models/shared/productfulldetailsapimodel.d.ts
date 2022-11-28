import { SpeakeasyBase } from "../../../internal/utils";
import { ProductAttachmentApiModel } from "./productattachmentapimodel";
import { ProductCouponApiModel } from "./productcouponapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { ProductDiscountApiModel } from "./productdiscountapimodel";
import { ProductItemApiModel } from "./productitemapimodel";
import { ProductGatewayApiModel } from "./productgatewayapimodel";
export declare enum ProductFullDetailsApiModelStatusEnum {
    Active = "Active",
    NotAvailable = "NotAvailable",
    Inactive = "Inactive"
}
export declare class ProductFullDetailsApiModel extends SpeakeasyBase {
    accessToken?: string;
    afterPaymentDescription?: string;
    attachments?: ProductAttachmentApiModel[];
    buttonCallToAction?: string;
    coupons?: ProductCouponApiModel[];
    currency?: CurrencyDetailsApiModel;
    currencyId?: number;
    description?: string;
    discounts?: ProductDiscountApiModel[];
    id?: number;
    isFeatured?: boolean;
    items?: ProductItemApiModel[];
    name?: string;
    paymentGateways?: ProductGatewayApiModel[];
    shippingAmount?: number;
    shippingDescription?: string;
    status?: ProductFullDetailsApiModelStatusEnum;
    subTotalAmount?: number;
    totalAmount?: number;
    totalWithShipping?: number;
    whatHappensNextDescription?: string;
}
