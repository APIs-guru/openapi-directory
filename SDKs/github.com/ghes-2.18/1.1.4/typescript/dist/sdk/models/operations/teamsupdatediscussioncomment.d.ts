import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsUpdateDiscussionCommentPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsUpdateDiscussionCommentHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class TeamsUpdateDiscussionCommentRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class TeamsUpdateDiscussionCommentRequest extends SpeakeasyBase {
    pathParams: TeamsUpdateDiscussionCommentPathParams;
    headers: TeamsUpdateDiscussionCommentHeaders;
    request?: TeamsUpdateDiscussionCommentRequestBody;
}
export declare class TeamsUpdateDiscussionCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussionComment?: shared.TeamDiscussionComment;
}
