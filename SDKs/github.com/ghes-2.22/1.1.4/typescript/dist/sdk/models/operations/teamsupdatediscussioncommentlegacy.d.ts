import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsUpdateDiscussionCommentLegacyPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsUpdateDiscussionCommentLegacyRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class TeamsUpdateDiscussionCommentLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsUpdateDiscussionCommentLegacyPathParams;
    request?: TeamsUpdateDiscussionCommentLegacyRequestBody;
}
export declare class TeamsUpdateDiscussionCommentLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussionComment?: shared.TeamDiscussionComment;
}
