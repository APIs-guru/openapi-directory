import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TemplateCreateMessageBody
/** 
 * Provides information about a request to create a message template.
**/
export class TemplateCreateMessageBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=RequestID" })
  requestId?: string;
}
