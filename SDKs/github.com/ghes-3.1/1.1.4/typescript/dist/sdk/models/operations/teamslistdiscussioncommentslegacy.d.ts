import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListDiscussionCommentsLegacyPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsListDiscussionCommentsLegacyQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    page?: number;
    perPage?: number;
}
export declare class TeamsListDiscussionCommentsLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsListDiscussionCommentsLegacyPathParams;
    queryParams: TeamsListDiscussionCommentsLegacyQueryParams;
}
export declare class TeamsListDiscussionCommentsLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamDiscussionComments?: shared.TeamDiscussionComment[];
}
