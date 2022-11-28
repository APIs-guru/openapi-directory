import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderAttachmentApiModel } from "./orderattachmentapimodel";
import { OrderItemApiModel } from "./orderitemapimodel";
import { OrderBillingDetailsApiModel } from "./orderbillingdetailsapimodel";
import { OrderShippingDetailsApiModel } from "./ordershippingdetailsapimodel";


export enum OrderCreateApiModelStatusEnum {
    PendingPayment = "PendingPayment",
    Processing = "Processing",
    Shipped = "Shipped",
    Completed = "Completed",
    OnHold = "OnHold",
    Cancelled = "Cancelled",
    Refunded = "Refunded",
    Failed = "Failed"
}


export class OrderCreateApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AfterPaymentDescription" })
  afterPaymentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=Attachments", elemType: OrderAttachmentApiModel })
  attachments?: OrderAttachmentApiModel[];

  @SpeakeasyMetadata({ data: "json, name=CouponCode" })
  couponCode?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: OrderItemApiModel })
  items?: OrderItemApiModel[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=OrderBillingDetails" })
  orderBillingDetails?: OrderBillingDetailsApiModel;

  @SpeakeasyMetadata({ data: "json, name=OrderShippingDetails" })
  orderShippingDetails?: OrderShippingDetailsApiModel;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: number;

  @SpeakeasyMetadata({ data: "json, name=Referral" })
  referral?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingAmount" })
  shippingAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=ShippingDescription" })
  shippingDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: OrderCreateApiModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=WhatHappensNextDescription" })
  whatHappensNextDescription?: string;
}
