import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateTemplateMessageBody
/** 
 * Provides information about a request to create a message template.
**/
export class CreateTemplateMessageBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=RequestID" })
  requestId?: string;
}
