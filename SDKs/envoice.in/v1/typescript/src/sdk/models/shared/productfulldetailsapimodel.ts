import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductAttachmentApiModel } from "./productattachmentapimodel";
import { ProductCouponApiModel } from "./productcouponapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { ProductDiscountApiModel } from "./productdiscountapimodel";
import { ProductItemApiModel } from "./productitemapimodel";
import { ProductGatewayApiModel } from "./productgatewayapimodel";

export enum ProductFullDetailsApiModelStatusEnum {
    Active = "Active"
,    NotAvailable = "NotAvailable"
,    Inactive = "Inactive"
}


export class ProductFullDetailsApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=AfterPaymentDescription" })
  afterPaymentDescription?: string;

  @Metadata({ data: "json, name=Attachments", elemType: shared.ProductAttachmentApiModel })
  attachments?: ProductAttachmentApiModel[];

  @Metadata({ data: "json, name=ButtonCallToAction" })
  buttonCallToAction?: string;

  @Metadata({ data: "json, name=Coupons", elemType: shared.ProductCouponApiModel })
  coupons?: ProductCouponApiModel[];

  @Metadata({ data: "json, name=Currency" })
  currency?: CurrencyDetailsApiModel;

  @Metadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Discounts", elemType: shared.ProductDiscountApiModel })
  discounts?: ProductDiscountApiModel[];

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=IsFeatured" })
  isFeatured?: boolean;

  @Metadata({ data: "json, name=Items", elemType: shared.ProductItemApiModel })
  items?: ProductItemApiModel[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PaymentGateways", elemType: shared.ProductGatewayApiModel })
  paymentGateways?: ProductGatewayApiModel[];

  @Metadata({ data: "json, name=ShippingAmount" })
  shippingAmount?: number;

  @Metadata({ data: "json, name=ShippingDescription" })
  shippingDescription?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ProductFullDetailsApiModelStatusEnum;

  @Metadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @Metadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @Metadata({ data: "json, name=TotalWithShipping" })
  totalWithShipping?: number;

  @Metadata({ data: "json, name=WhatHappensNextDescription" })
  whatHappensNextDescription?: string;
}
