import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateReplyPathParams extends SpeakeasyBase {
    spaceId: string;
    topicId: string;
}
export declare class CreateReplyRequestBody extends SpeakeasyBase {
    attachments?: string[];
    complex?: boolean;
    content?: string;
    formMetaData?: string;
    mentionedUser?: string;
}
export declare class CreateReplySecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class CreateReplyRequest extends SpeakeasyBase {
    pathParams: CreateReplyPathParams;
    request?: CreateReplyRequestBody;
    security: CreateReplySecurity;
}
export declare class CreateReplyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    spaceReply?: any;
    statusCode: number;
}
