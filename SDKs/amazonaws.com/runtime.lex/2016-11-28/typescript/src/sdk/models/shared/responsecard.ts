import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContentTypeEnum } from "./contenttypeenum";
import { GenericAttachment } from "./genericattachment";


// ResponseCard
/** 
 * If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent).
**/
export class ResponseCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentType" })
  contentType?: ContentTypeEnum;

  @Metadata({ data: "json, name=genericAttachments", elemType: shared.GenericAttachment })
  genericAttachments?: GenericAttachment[];

  @Metadata({ data: "json, name=version" })
  version?: string;
}
