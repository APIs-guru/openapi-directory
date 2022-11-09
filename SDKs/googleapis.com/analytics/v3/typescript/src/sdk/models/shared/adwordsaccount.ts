import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdWordsAccount
/** 
 * JSON template for an Google Ads account.
**/
export class AdWordsAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoTaggingEnabled" })
  autoTaggingEnabled?: boolean;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
