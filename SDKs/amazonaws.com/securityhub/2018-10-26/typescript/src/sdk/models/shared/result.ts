import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Result
/** 
 * Details about the account that was not processed.
**/
export class Result extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProcessingResult" })
  processingResult?: string;
}
