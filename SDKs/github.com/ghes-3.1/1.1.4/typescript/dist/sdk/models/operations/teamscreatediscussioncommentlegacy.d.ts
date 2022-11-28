import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCreateDiscussionCommentLegacyPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsCreateDiscussionCommentLegacyRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class TeamsCreateDiscussionCommentLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsCreateDiscussionCommentLegacyPathParams;
    request?: TeamsCreateDiscussionCommentLegacyRequestBody;
}
export declare class TeamsCreateDiscussionCommentLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussionComment?: shared.TeamDiscussionComment;
}
