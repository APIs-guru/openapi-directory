import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";


export enum ProductDetailsApiModelStatusEnum {
    Active = "Active",
    NotAvailable = "NotAvailable",
    Inactive = "Inactive"
}


export class ProductDetailsApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=AfterPaymentDescription" })
  afterPaymentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ButtonCallToAction" })
  buttonCallToAction?: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency?: CurrencyDetailsApiModel;

  @SpeakeasyMetadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=IsFeatured" })
  isFeatured?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingAmount" })
  shippingAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=ShippingDescription" })
  shippingDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ProductDetailsApiModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalWithShipping" })
  totalWithShipping?: number;

  @SpeakeasyMetadata({ data: "json, name=WhatHappensNextDescription" })
  whatHappensNextDescription?: string;
}
