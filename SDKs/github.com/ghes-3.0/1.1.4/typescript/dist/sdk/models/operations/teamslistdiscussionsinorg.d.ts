import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListDiscussionsInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
}
export declare class TeamsListDiscussionsInOrgQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    page?: number;
    perPage?: number;
    pinned?: string;
}
export declare class TeamsListDiscussionsInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsListDiscussionsInOrgPathParams;
    queryParams: TeamsListDiscussionsInOrgQueryParams;
}
export declare class TeamsListDiscussionsInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamDiscussions?: shared.TeamDiscussion[];
}
