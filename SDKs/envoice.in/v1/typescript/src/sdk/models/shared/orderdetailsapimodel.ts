import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { OrderBillingDetailsApiModel } from "./orderbillingdetailsapimodel";
import { OrderShippingDetailsApiModel } from "./ordershippingdetailsapimodel";


export enum OrderDetailsApiModelStatusEnum {
    PendingPayment = "PendingPayment",
    Processing = "Processing",
    Shipped = "Shipped",
    Completed = "Completed",
    OnHold = "OnHold",
    Cancelled = "Cancelled",
    Refunded = "Refunded",
    Failed = "Failed"
}


export class OrderDetailsApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=AfterPaymentDescription" })
  afterPaymentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=CouponCode" })
  couponCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency?: CurrencyDetailsApiModel;

  @SpeakeasyMetadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

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
  status?: OrderDetailsApiModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalWithShipping" })
  totalWithShipping?: number;

  @SpeakeasyMetadata({ data: "json, name=WhatHappensNextDescription" })
  whatHappensNextDescription?: string;
}
