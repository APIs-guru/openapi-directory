import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsGetDiscussionCommentInOrgPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    org: string;
    teamSlug: string;
}
export declare class TeamsGetDiscussionCommentInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsGetDiscussionCommentInOrgPathParams;
}
export declare class TeamsGetDiscussionCommentInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussionComment?: shared.TeamDiscussionComment;
}
