import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { ServiceCharge } from "./servicecharge";
import { ServiceChargeInput } from "./servicecharge";


export enum MerchantStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Other = "other"
}


export class Merchant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=main_location_id" })
  mainLocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=service_charges", elemType: ServiceCharge })
  serviceCharges?: ServiceCharge[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: MerchantStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}


export class MerchantInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=main_location_id" })
  mainLocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=service_charges", elemType: ServiceChargeInput })
  serviceCharges?: ServiceChargeInput[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: MerchantStatusEnum;
}
