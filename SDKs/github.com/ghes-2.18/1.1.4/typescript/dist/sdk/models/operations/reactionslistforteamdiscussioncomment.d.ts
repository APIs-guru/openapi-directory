import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForTeamDiscussionCommentPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare enum ReactionsListForTeamDiscussionCommentContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsListForTeamDiscussionCommentQueryParams extends SpeakeasyBase {
    content?: ReactionsListForTeamDiscussionCommentContentEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForTeamDiscussionCommentHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class ReactionsListForTeamDiscussionCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsListForTeamDiscussionCommentPathParams;
    queryParams: ReactionsListForTeamDiscussionCommentQueryParams;
    headers: ReactionsListForTeamDiscussionCommentHeaders;
}
export declare class ReactionsListForTeamDiscussionCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    reactions?: shared.Reaction[];
}
