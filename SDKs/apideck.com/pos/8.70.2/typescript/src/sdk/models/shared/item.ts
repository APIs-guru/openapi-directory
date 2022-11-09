import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyEnum } from "./currencyenum";

export enum ItemPricingTypeEnum {
    Fixed = "fixed"
,    Variable = "variable"
,    PerUnit = "per_unit"
,    Other = "other"
}

export enum ItemProductTypeEnum {
    Regular = "regular"
,    Other = "other"
}


export class Item extends SpeakeasyBase {
  @Metadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=absent_at_location_ids" })
  absentAtLocationIds?: string[];

  @Metadata({ data: "json, name=available" })
  available?: boolean;

  @Metadata({ data: "json, name=available_for_pickup" })
  availableForPickup?: boolean;

  @Metadata({ data: "json, name=available_online" })
  availableOnline?: boolean;

  @Metadata({ data: "json, name=categories" })
  categories?: any[];

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=cost" })
  cost?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @Metadata({ data: "json, name=modifier_groups" })
  modifierGroups?: any[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=options" })
  options?: any[];

  @Metadata({ data: "json, name=present_at_all_locations" })
  presentAtAllLocations?: boolean;

  @Metadata({ data: "json, name=price_amount" })
  priceAmount?: number;

  @Metadata({ data: "json, name=price_currency" })
  priceCurrency?: CurrencyEnum;

  @Metadata({ data: "json, name=pricing_type" })
  pricingType?: ItemPricingTypeEnum;

  @Metadata({ data: "json, name=product_type" })
  productType?: ItemProductTypeEnum;

  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=tax_ids" })
  taxIds?: string[];

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @Metadata({ data: "json, name=variations" })
  variations?: any[];

  @Metadata({ data: "json, name=version" })
  version?: string;
}
