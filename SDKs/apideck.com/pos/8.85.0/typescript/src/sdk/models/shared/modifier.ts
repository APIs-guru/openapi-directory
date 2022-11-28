import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";



export class ModifierInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternate_name" })
  alternateName?: string;

  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: boolean;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata({ data: "json, name=modifier_group_id" })
  modifierGroupId: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=price_amount" })
  priceAmount?: number;
}


export class Modifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternate_name" })
  alternateName?: string;

  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata({ data: "json, name=modifier_group_id" })
  modifierGroupId: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=price_amount" })
  priceAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
