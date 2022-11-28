import { SpeakeasyBase } from "../../../internal/utils";
import { ProductAttachmentApiModel } from "./productattachmentapimodel";
import { ProductCouponApiModel } from "./productcouponapimodel";
import { ProductDiscountApiModel } from "./productdiscountapimodel";
import { ProductItemApiModel } from "./productitemapimodel";
import { ProductGatewayApiModel } from "./productgatewayapimodel";
export declare enum ProductCreateApiModelStatusEnum {
    Active = "Active",
    NotAvailable = "NotAvailable",
    Inactive = "Inactive"
}
export declare class ProductCreateApiModel extends SpeakeasyBase {
    afterPaymentDescription?: string;
    attachments?: ProductAttachmentApiModel[];
    buttonCallToAction?: string;
    coupons?: ProductCouponApiModel[];
    currencyId?: number;
    description?: string;
    discounts?: ProductDiscountApiModel[];
    isFeatured?: boolean;
    items?: ProductItemApiModel[];
    name?: string;
    paymentGateways?: ProductGatewayApiModel[];
    shippingAmount?: number;
    shippingDescription?: string;
    status?: ProductCreateApiModelStatusEnum;
    whatHappensNextDescription?: string;
}
