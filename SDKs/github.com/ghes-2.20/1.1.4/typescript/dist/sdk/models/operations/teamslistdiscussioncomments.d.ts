import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListDiscussionCommentsPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare enum TeamsListDiscussionCommentsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class TeamsListDiscussionCommentsQueryParams extends SpeakeasyBase {
    direction?: TeamsListDiscussionCommentsDirectionEnum;
    page?: number;
    perPage?: number;
}
export declare class TeamsListDiscussionCommentsRequest extends SpeakeasyBase {
    pathParams: TeamsListDiscussionCommentsPathParams;
    queryParams: TeamsListDiscussionCommentsQueryParams;
}
export declare class TeamsListDiscussionCommentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamDiscussionComments?: shared.TeamDiscussionComment[];
}
