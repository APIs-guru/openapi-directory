import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";


export enum ItemPricingTypeEnum {
    Fixed = "fixed",
    Variable = "variable",
    PerUnit = "per_unit",
    Other = "other"
}

export enum ItemProductTypeEnum {
    Regular = "regular",
    Other = "other"
}


export class Item extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @SpeakeasyMetadata({ data: "json, name=absent_at_location_ids" })
  absentAtLocationIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: boolean;

  @SpeakeasyMetadata({ data: "json, name=available_for_pickup" })
  availableForPickup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=available_online" })
  availableOnline?: boolean;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: any[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata({ data: "json, name=modifier_groups" })
  modifierGroups?: any[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: any[];

  @SpeakeasyMetadata({ data: "json, name=present_at_all_locations" })
  presentAtAllLocations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=price_amount" })
  priceAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=price_currency" })
  priceCurrency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=pricing_type" })
  pricingType?: ItemPricingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=product_type" })
  productType?: ItemProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_ids" })
  taxIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=variations" })
  variations?: any[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class ItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @SpeakeasyMetadata({ data: "json, name=absent_at_location_ids" })
  absentAtLocationIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: boolean;

  @SpeakeasyMetadata({ data: "json, name=available_for_pickup" })
  availableForPickup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=available_online" })
  availableOnline?: boolean;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: any[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata({ data: "json, name=modifier_groups" })
  modifierGroups?: any[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: any[];

  @SpeakeasyMetadata({ data: "json, name=present_at_all_locations" })
  presentAtAllLocations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=price_amount" })
  priceAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=price_currency" })
  priceCurrency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=pricing_type" })
  pricingType?: ItemPricingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=product_type" })
  productType?: ItemProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_ids" })
  taxIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=variations" })
  variations?: any[];
}
