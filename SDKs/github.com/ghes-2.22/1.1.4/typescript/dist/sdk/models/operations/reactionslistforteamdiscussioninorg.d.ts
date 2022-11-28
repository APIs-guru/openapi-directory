import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForTeamDiscussionInOrgPathParams extends SpeakeasyBase {
    discussionNumber: number;
    org: string;
    teamSlug: string;
}
export declare enum ReactionsListForTeamDiscussionInOrgContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsListForTeamDiscussionInOrgQueryParams extends SpeakeasyBase {
    content?: ReactionsListForTeamDiscussionInOrgContentEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForTeamDiscussionInOrgRequest extends SpeakeasyBase {
    pathParams: ReactionsListForTeamDiscussionInOrgPathParams;
    queryParams: ReactionsListForTeamDiscussionInOrgQueryParams;
}
export declare class ReactionsListForTeamDiscussionInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    reactions?: shared.Reaction[];
}
