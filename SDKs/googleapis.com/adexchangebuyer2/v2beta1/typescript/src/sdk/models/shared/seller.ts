import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SellerInput
/** 
 * Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
**/
export class SellerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;
}


// Seller
/** 
 * Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
**/
export class Seller extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountId" })
  subAccountId?: string;
}
