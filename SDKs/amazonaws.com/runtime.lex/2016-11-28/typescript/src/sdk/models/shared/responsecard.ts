import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentTypeEnum } from "./contenttypeenum";
import { GenericAttachment } from "./genericattachment";



// ResponseCard
/** 
 * If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent).
**/
export class ResponseCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: ContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=genericAttachments", elemType: GenericAttachment })
  genericAttachments?: GenericAttachment[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
