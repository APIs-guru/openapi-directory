import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdWordsAccount
/** 
 * JSON template for an Google Ads account.
**/
export class AdWordsAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoTaggingEnabled" })
  autoTaggingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
