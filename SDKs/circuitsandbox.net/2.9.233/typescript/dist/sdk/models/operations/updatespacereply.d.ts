import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSpaceReplyPathParams extends SpeakeasyBase {
    replyId: string;
    spaceId: string;
    topicId: string;
}
export declare class UpdateSpaceReplyRequestBody extends SpeakeasyBase {
    attachments?: string[];
    complex?: boolean;
    content?: string;
    formMetaData?: string;
    mentionedUsers?: string[];
}
export declare class UpdateSpaceReplySecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UpdateSpaceReplyRequest extends SpeakeasyBase {
    pathParams: UpdateSpaceReplyPathParams;
    request?: UpdateSpaceReplyRequestBody;
    security: UpdateSpaceReplySecurity;
}
export declare class UpdateSpaceReplyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    spaceReply?: any;
    statusCode: number;
}
