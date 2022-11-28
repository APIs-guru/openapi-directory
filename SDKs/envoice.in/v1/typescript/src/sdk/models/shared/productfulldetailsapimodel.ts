import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductAttachmentApiModel } from "./productattachmentapimodel";
import { ProductCouponApiModel } from "./productcouponapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { ProductDiscountApiModel } from "./productdiscountapimodel";
import { ProductItemApiModel } from "./productitemapimodel";
import { ProductGatewayApiModel } from "./productgatewayapimodel";


export enum ProductFullDetailsApiModelStatusEnum {
    Active = "Active",
    NotAvailable = "NotAvailable",
    Inactive = "Inactive"
}


export class ProductFullDetailsApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=AfterPaymentDescription" })
  afterPaymentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=Attachments", elemType: ProductAttachmentApiModel })
  attachments?: ProductAttachmentApiModel[];

  @SpeakeasyMetadata({ data: "json, name=ButtonCallToAction" })
  buttonCallToAction?: string;

  @SpeakeasyMetadata({ data: "json, name=Coupons", elemType: ProductCouponApiModel })
  coupons?: ProductCouponApiModel[];

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency?: CurrencyDetailsApiModel;

  @SpeakeasyMetadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Discounts", elemType: ProductDiscountApiModel })
  discounts?: ProductDiscountApiModel[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=IsFeatured" })
  isFeatured?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: ProductItemApiModel })
  items?: ProductItemApiModel[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: ProductGatewayApiModel })
  paymentGateways?: ProductGatewayApiModel[];

  @SpeakeasyMetadata({ data: "json, name=ShippingAmount" })
  shippingAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=ShippingDescription" })
  shippingDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ProductFullDetailsApiModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalWithShipping" })
  totalWithShipping?: number;

  @SpeakeasyMetadata({ data: "json, name=WhatHappensNextDescription" })
  whatHappensNextDescription?: string;
}
