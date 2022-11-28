import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BundleRecipientEntity
/** 
 * List Bundle Recipients
**/
export class BundleRecipientEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient" })
  recipient?: string;

  @SpeakeasyMetadata({ data: "json, name=sent_at" })
  sentAt?: Date;
}
