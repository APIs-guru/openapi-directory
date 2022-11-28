import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForTeamDiscussionPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare enum ReactionsListForTeamDiscussionContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsListForTeamDiscussionQueryParams extends SpeakeasyBase {
    content?: ReactionsListForTeamDiscussionContentEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForTeamDiscussionHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class ReactionsListForTeamDiscussionRequest extends SpeakeasyBase {
    pathParams: ReactionsListForTeamDiscussionPathParams;
    queryParams: ReactionsListForTeamDiscussionQueryParams;
    headers: ReactionsListForTeamDiscussionHeaders;
}
export declare class ReactionsListForTeamDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    reactions?: shared.Reaction[];
}
