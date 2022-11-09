import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddCommunicationToCaseResponse
/** 
 * The result of the <a>AddCommunicationToCase</a> operation.
**/
export class AddCommunicationToCaseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: boolean;
}
