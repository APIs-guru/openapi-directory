import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListDiscussionCommentsInOrgPathParams extends SpeakeasyBase {
    discussionNumber: number;
    org: string;
    teamSlug: string;
}
export declare class TeamsListDiscussionCommentsInOrgQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    page?: number;
    perPage?: number;
}
export declare class TeamsListDiscussionCommentsInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsListDiscussionCommentsInOrgPathParams;
    queryParams: TeamsListDiscussionCommentsInOrgQueryParams;
}
export declare class TeamsListDiscussionCommentsInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamDiscussionComments?: shared.TeamDiscussionComment[];
}
