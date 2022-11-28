import { SpeakeasyBase } from "../../../internal/utils";
import { ContentTypeEnum } from "./contenttypeenum";
/**
 * The message object that provides the message text and its type.
**/
export declare class Message extends SpeakeasyBase {
    content: string;
    contentType: ContentTypeEnum;
    groupNumber?: number;
}
