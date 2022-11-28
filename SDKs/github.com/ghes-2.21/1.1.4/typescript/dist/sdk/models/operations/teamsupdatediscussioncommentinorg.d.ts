import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsUpdateDiscussionCommentInOrgPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    org: string;
    teamSlug: string;
}
export declare class TeamsUpdateDiscussionCommentInOrgRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class TeamsUpdateDiscussionCommentInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsUpdateDiscussionCommentInOrgPathParams;
    request?: TeamsUpdateDiscussionCommentInOrgRequestBody;
}
export declare class TeamsUpdateDiscussionCommentInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussionComment?: shared.TeamDiscussionComment;
}
