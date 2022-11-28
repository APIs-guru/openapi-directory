import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListDiscussionsLegacyPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsListDiscussionsLegacyQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    page?: number;
    perPage?: number;
}
export declare class TeamsListDiscussionsLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsListDiscussionsLegacyPathParams;
    queryParams: TeamsListDiscussionsLegacyQueryParams;
}
export declare class TeamsListDiscussionsLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamDiscussions?: shared.TeamDiscussion[];
}
