import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MessageBody
/** 
 * Provides information about an API request or response.
**/
export class MessageBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=RequestID" })
  requestId?: string;
}
