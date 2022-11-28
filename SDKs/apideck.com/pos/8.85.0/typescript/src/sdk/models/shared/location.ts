import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";


export enum LocationStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Other = "other"
}


export class LocationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=business_name" })
  businessName?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=merchant_id" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: LocationStatusEnum;
}


export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=business_name" })
  businessName?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=merchant_id" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: LocationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
