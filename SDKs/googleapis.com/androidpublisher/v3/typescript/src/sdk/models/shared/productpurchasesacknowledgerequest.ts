import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProductPurchasesAcknowledgeRequest
/** 
 * Request for the product.purchases.acknowledge API.
**/
export class ProductPurchasesAcknowledgeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=developerPayload" })
  developerPayload?: string;
}
