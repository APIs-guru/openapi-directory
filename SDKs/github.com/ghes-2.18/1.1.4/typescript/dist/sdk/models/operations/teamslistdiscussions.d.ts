import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListDiscussionsPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsListDiscussionsQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    page?: number;
    perPage?: number;
}
export declare class TeamsListDiscussionsHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class TeamsListDiscussionsRequest extends SpeakeasyBase {
    pathParams: TeamsListDiscussionsPathParams;
    queryParams: TeamsListDiscussionsQueryParams;
    headers: TeamsListDiscussionsHeaders;
}
export declare class TeamsListDiscussionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamDiscussions?: shared.TeamDiscussion[];
}
