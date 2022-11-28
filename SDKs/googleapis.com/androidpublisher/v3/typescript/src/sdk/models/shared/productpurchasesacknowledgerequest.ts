import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductPurchasesAcknowledgeRequest
/** 
 * Request for the product.purchases.acknowledge API.
**/
export class ProductPurchasesAcknowledgeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=developerPayload" })
  developerPayload?: string;
}
