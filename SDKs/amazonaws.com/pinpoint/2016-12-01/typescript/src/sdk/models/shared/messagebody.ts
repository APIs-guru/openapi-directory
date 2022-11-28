import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MessageBody
/** 
 * Provides information about an API request or response.
**/
export class MessageBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestID" })
  requestId?: string;
}
