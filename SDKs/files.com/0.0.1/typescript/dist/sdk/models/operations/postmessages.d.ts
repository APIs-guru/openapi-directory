import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMessagesRequestBody extends SpeakeasyBase {
    body: string;
    projectId: number;
    subject: string;
    userId?: number;
}
export declare class PostMessagesRequest extends SpeakeasyBase {
    request?: PostMessagesRequestBody;
}
export declare class PostMessagesResponse extends SpeakeasyBase {
    contentType: string;
    messageEntity?: shared.MessageEntity;
    statusCode: number;
}
