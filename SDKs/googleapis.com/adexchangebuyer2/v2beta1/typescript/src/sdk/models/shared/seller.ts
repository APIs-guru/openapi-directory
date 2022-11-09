import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Seller
/** 
 * Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
**/
export class Seller extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=subAccountId" })
  subAccountId?: string;
}
