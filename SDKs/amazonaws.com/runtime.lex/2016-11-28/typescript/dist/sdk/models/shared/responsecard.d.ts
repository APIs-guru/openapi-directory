import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ContentTypeEnum } from "./contenttypeenum";
import { GenericAttachment } from "./genericattachment";
/**
 * If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent).
**/
export declare class ResponseCard extends SpeakeasyBase {
    contentType?: ContentTypeEnum;
    genericAttachments?: GenericAttachment[];
    version?: string;
}
