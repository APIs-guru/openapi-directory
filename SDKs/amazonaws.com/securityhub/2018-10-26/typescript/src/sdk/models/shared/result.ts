import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Result
/** 
 * Details about the account that was not processed.
**/
export class Result extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=ProcessingResult" })
  processingResult?: string;
}
