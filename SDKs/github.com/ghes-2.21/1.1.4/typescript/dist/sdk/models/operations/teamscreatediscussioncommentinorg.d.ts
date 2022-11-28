import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCreateDiscussionCommentInOrgPathParams extends SpeakeasyBase {
    discussionNumber: number;
    org: string;
    teamSlug: string;
}
export declare class TeamsCreateDiscussionCommentInOrgRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class TeamsCreateDiscussionCommentInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsCreateDiscussionCommentInOrgPathParams;
    request?: TeamsCreateDiscussionCommentInOrgRequestBody;
}
export declare class TeamsCreateDiscussionCommentInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussionComment?: shared.TeamDiscussionComment;
}
