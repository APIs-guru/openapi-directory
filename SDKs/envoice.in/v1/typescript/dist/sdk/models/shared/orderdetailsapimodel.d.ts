import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { OrderBillingDetailsApiModel } from "./orderbillingdetailsapimodel";
import { OrderShippingDetailsApiModel } from "./ordershippingdetailsapimodel";
export declare enum OrderDetailsApiModelStatusEnum {
    PendingPayment = "PendingPayment",
    Processing = "Processing",
    Shipped = "Shipped",
    Completed = "Completed",
    OnHold = "OnHold",
    Cancelled = "Cancelled",
    Refunded = "Refunded",
    Failed = "Failed"
}
export declare class OrderDetailsApiModel extends SpeakeasyBase {
    accessToken?: string;
    afterPaymentDescription?: string;
    couponCode?: string;
    currency?: CurrencyDetailsApiModel;
    currencyId?: number;
    description?: string;
    discountAmount?: number;
    id?: number;
    name?: string;
    note?: string;
    orderBillingDetails?: OrderBillingDetailsApiModel;
    orderShippingDetails?: OrderShippingDetailsApiModel;
    productId?: number;
    referral?: string;
    shippingAmount?: number;
    shippingDescription?: string;
    status?: OrderDetailsApiModelStatusEnum;
    subTotalAmount?: number;
    taxAmount?: number;
    totalAmount?: number;
    totalWithShipping?: number;
    whatHappensNextDescription?: string;
}
