import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiKeyInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer_email" })
  customerEmail?: string;

  @Metadata({ data: "json, name=customer_name" })
  customerName?: string;

  @Metadata({ data: "json, name=expires" })
  expires?: string;

  @Metadata({ data: "json, name=item_id" })
  itemId?: string;

  @Metadata({ data: "json, name=item_name" })
  itemName?: string;

  @Metadata({ data: "json, name=license" })
  license?: string;

  @Metadata({ data: "json, name=license_limit" })
  licenseLimit?: string;

  @Metadata({ data: "json, name=price_id" })
  priceId?: string;

  @Metadata({ data: "json, name=success" })
  success?: string;
}
