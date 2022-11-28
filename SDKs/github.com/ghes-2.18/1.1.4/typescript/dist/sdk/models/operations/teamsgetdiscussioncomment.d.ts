import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsGetDiscussionCommentPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsGetDiscussionCommentHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class TeamsGetDiscussionCommentRequest extends SpeakeasyBase {
    pathParams: TeamsGetDiscussionCommentPathParams;
    headers: TeamsGetDiscussionCommentHeaders;
}
export declare class TeamsGetDiscussionCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussionComment?: shared.TeamDiscussionComment;
}
