import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyEnum } from "./currencyenum";


export class Modifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternate_name" })
  alternateName?: string;

  @Metadata({ data: "json, name=available" })
  available?: boolean;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @Metadata({ data: "json, name=modifier_group_id" })
  modifierGroupId: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=price_amount" })
  priceAmount?: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
