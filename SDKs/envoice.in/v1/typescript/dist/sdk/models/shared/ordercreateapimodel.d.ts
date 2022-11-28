import { SpeakeasyBase } from "../../../internal/utils";
import { OrderAttachmentApiModel } from "./orderattachmentapimodel";
import { OrderItemApiModel } from "./orderitemapimodel";
import { OrderBillingDetailsApiModel } from "./orderbillingdetailsapimodel";
import { OrderShippingDetailsApiModel } from "./ordershippingdetailsapimodel";
export declare enum OrderCreateApiModelStatusEnum {
    PendingPayment = "PendingPayment",
    Processing = "Processing",
    Shipped = "Shipped",
    Completed = "Completed",
    OnHold = "OnHold",
    Cancelled = "Cancelled",
    Refunded = "Refunded",
    Failed = "Failed"
}
export declare class OrderCreateApiModel extends SpeakeasyBase {
    afterPaymentDescription?: string;
    attachments?: OrderAttachmentApiModel[];
    couponCode?: string;
    currencyId?: number;
    description?: string;
    discountAmount?: number;
    items?: OrderItemApiModel[];
    name?: string;
    note?: string;
    orderBillingDetails?: OrderBillingDetailsApiModel;
    orderShippingDetails?: OrderShippingDetailsApiModel;
    productId?: number;
    referral?: string;
    shippingAmount?: number;
    shippingDescription?: string;
    status?: OrderCreateApiModelStatusEnum;
    subTotalAmount?: number;
    taxAmount?: number;
    totalAmount?: number;
    whatHappensNextDescription?: string;
}
