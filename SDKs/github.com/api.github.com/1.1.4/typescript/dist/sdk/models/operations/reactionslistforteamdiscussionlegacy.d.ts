import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForTeamDiscussionLegacyPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare enum ReactionsListForTeamDiscussionLegacyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsListForTeamDiscussionLegacyQueryParams extends SpeakeasyBase {
    content?: ReactionsListForTeamDiscussionLegacyContentEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForTeamDiscussionLegacyRequest extends SpeakeasyBase {
    pathParams: ReactionsListForTeamDiscussionLegacyPathParams;
    queryParams: ReactionsListForTeamDiscussionLegacyQueryParams;
}
export declare class ReactionsListForTeamDiscussionLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    reactions?: shared.Reaction[];
}
