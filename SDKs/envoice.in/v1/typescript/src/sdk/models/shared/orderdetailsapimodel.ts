import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { OrderBillingDetailsApiModel } from "./orderbillingdetailsapimodel";
import { OrderShippingDetailsApiModel } from "./ordershippingdetailsapimodel";

export enum OrderDetailsApiModelStatusEnum {
    PendingPayment = "PendingPayment"
,    Processing = "Processing"
,    Shipped = "Shipped"
,    Completed = "Completed"
,    OnHold = "OnHold"
,    Cancelled = "Cancelled"
,    Refunded = "Refunded"
,    Failed = "Failed"
}


export class OrderDetailsApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=AfterPaymentDescription" })
  afterPaymentDescription?: string;

  @Metadata({ data: "json, name=CouponCode" })
  couponCode?: string;

  @Metadata({ data: "json, name=Currency" })
  currency?: CurrencyDetailsApiModel;

  @Metadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Note" })
  note?: string;

  @Metadata({ data: "json, name=OrderBillingDetails" })
  orderBillingDetails?: OrderBillingDetailsApiModel;

  @Metadata({ data: "json, name=OrderShippingDetails" })
  orderShippingDetails?: OrderShippingDetailsApiModel;

  @Metadata({ data: "json, name=ProductId" })
  productId?: number;

  @Metadata({ data: "json, name=Referral" })
  referral?: string;

  @Metadata({ data: "json, name=ShippingAmount" })
  shippingAmount?: number;

  @Metadata({ data: "json, name=ShippingDescription" })
  shippingDescription?: string;

  @Metadata({ data: "json, name=Status" })
  status?: OrderDetailsApiModelStatusEnum;

  @Metadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @Metadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @Metadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @Metadata({ data: "json, name=TotalWithShipping" })
  totalWithShipping?: number;

  @Metadata({ data: "json, name=WhatHappensNextDescription" })
  whatHappensNextDescription?: string;
}
