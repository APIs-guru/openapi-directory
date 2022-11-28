import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TemplateCreateMessageBody
/** 
 * Provides information about a request to create a message template.
**/
export class TemplateCreateMessageBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestID" })
  requestId?: string;
}
