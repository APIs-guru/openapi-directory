import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForTeamDiscussionCommentInOrgPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    org: string;
    teamSlug: string;
}
export declare enum ReactionsListForTeamDiscussionCommentInOrgContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsListForTeamDiscussionCommentInOrgQueryParams extends SpeakeasyBase {
    content?: ReactionsListForTeamDiscussionCommentInOrgContentEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForTeamDiscussionCommentInOrgRequest extends SpeakeasyBase {
    pathParams: ReactionsListForTeamDiscussionCommentInOrgPathParams;
    queryParams: ReactionsListForTeamDiscussionCommentInOrgQueryParams;
}
export declare class ReactionsListForTeamDiscussionCommentInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    reactions?: shared.Reaction[];
}
