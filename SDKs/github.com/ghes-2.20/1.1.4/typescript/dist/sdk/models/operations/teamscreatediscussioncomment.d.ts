import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCreateDiscussionCommentPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsCreateDiscussionCommentRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class TeamsCreateDiscussionCommentRequest extends SpeakeasyBase {
    pathParams: TeamsCreateDiscussionCommentPathParams;
    request?: TeamsCreateDiscussionCommentRequestBody;
}
export declare class TeamsCreateDiscussionCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussionComment?: shared.TeamDiscussionComment;
}
