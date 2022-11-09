import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";

export enum ProductDetailsApiModelStatusEnum {
    Active = "Active"
,    NotAvailable = "NotAvailable"
,    Inactive = "Inactive"
}


export class ProductDetailsApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=AfterPaymentDescription" })
  afterPaymentDescription?: string;

  @Metadata({ data: "json, name=ButtonCallToAction" })
  buttonCallToAction?: string;

  @Metadata({ data: "json, name=Currency" })
  currency?: CurrencyDetailsApiModel;

  @Metadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=IsFeatured" })
  isFeatured?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ShippingAmount" })
  shippingAmount?: number;

  @Metadata({ data: "json, name=ShippingDescription" })
  shippingDescription?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ProductDetailsApiModelStatusEnum;

  @Metadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @Metadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @Metadata({ data: "json, name=TotalWithShipping" })
  totalWithShipping?: number;

  @Metadata({ data: "json, name=WhatHappensNextDescription" })
  whatHappensNextDescription?: string;
}
