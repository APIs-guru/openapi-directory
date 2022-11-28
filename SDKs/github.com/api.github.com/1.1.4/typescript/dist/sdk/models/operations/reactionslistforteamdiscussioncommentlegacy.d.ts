import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForTeamDiscussionCommentLegacyPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare enum ReactionsListForTeamDiscussionCommentLegacyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsListForTeamDiscussionCommentLegacyQueryParams extends SpeakeasyBase {
    content?: ReactionsListForTeamDiscussionCommentLegacyContentEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForTeamDiscussionCommentLegacyRequest extends SpeakeasyBase {
    pathParams: ReactionsListForTeamDiscussionCommentLegacyPathParams;
    queryParams: ReactionsListForTeamDiscussionCommentLegacyQueryParams;
}
export declare class ReactionsListForTeamDiscussionCommentLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    reactions?: shared.Reaction[];
}
