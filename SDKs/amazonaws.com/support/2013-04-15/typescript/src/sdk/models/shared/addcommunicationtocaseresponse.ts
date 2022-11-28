import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddCommunicationToCaseResponse
/** 
 * The result of the <a>AddCommunicationToCase</a> operation.
**/
export class AddCommunicationToCaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: boolean;
}
