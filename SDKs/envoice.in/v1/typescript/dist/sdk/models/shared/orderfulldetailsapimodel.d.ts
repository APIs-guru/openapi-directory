import { SpeakeasyBase } from "../../../internal/utils";
import { OrderAttachmentApiModel } from "./orderattachmentapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { OrderItemApiModel } from "./orderitemapimodel";
import { OrderBillingDetailsApiModel } from "./orderbillingdetailsapimodel";
import { OrderShippingDetailsApiModel } from "./ordershippingdetailsapimodel";
export declare enum OrderFullDetailsApiModelStatusEnum {
    PendingPayment = "PendingPayment",
    Processing = "Processing",
    Shipped = "Shipped",
    Completed = "Completed",
    OnHold = "OnHold",
    Cancelled = "Cancelled",
    Refunded = "Refunded",
    Failed = "Failed"
}
export declare class OrderFullDetailsApiModel extends SpeakeasyBase {
    accessToken?: string;
    afterPaymentDescription?: string;
    attachments?: OrderAttachmentApiModel[];
    couponCode?: string;
    currency?: CurrencyDetailsApiModel;
    currencyId?: number;
    description?: string;
    discountAmount?: number;
    id?: number;
    items?: OrderItemApiModel[];
    name?: string;
    note?: string;
    orderBillingDetails?: OrderBillingDetailsApiModel;
    orderShippingDetails?: OrderShippingDetailsApiModel;
    productId?: number;
    referral?: string;
    shippingAmount?: number;
    shippingDescription?: string;
    status?: OrderFullDetailsApiModelStatusEnum;
    subTotalAmount?: number;
    taxAmount?: number;
    totalAmount?: number;
    totalWithShipping?: number;
    whatHappensNextDescription?: string;
}
