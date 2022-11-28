import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LegacyReference
/** 
 * Type defining the legacyReference container. This container is needed if the seller is issuing a refund for an individual order line item, and wishes to use an item ID and transaction ID to identify the order line item.
**/
export class LegacyReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=legacyItemId" })
  legacyItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=legacyTransactionId" })
  legacyTransactionId?: string;
}
