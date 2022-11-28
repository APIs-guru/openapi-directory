import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsDeleteDiscussionCommentInOrgPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    org: string;
    teamSlug: string;
}
export declare class TeamsDeleteDiscussionCommentInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsDeleteDiscussionCommentInOrgPathParams;
}
export declare class TeamsDeleteDiscussionCommentInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
