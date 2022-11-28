import { SpeakeasyBase } from "../../../internal/utils";
import { MessageContentTypeEnum } from "./messagecontenttypeenum";
import { ImageResponseCard } from "./imageresponsecard";
/**
 * Container for text that is returned to the customer..
**/
export declare class Message extends SpeakeasyBase {
    content?: string;
    contentType: MessageContentTypeEnum;
    imageResponseCard?: ImageResponseCard;
}
