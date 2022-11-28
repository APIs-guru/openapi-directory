import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiKeyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer_email" })
  customerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=customer_name" })
  customerName?: string;

  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: string;

  @SpeakeasyMetadata({ data: "json, name=item_id" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=item_name" })
  itemName?: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: string;

  @SpeakeasyMetadata({ data: "json, name=license_limit" })
  licenseLimit?: string;

  @SpeakeasyMetadata({ data: "json, name=price_id" })
  priceId?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: string;
}
