import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListReposStarredByAuthenticatedUserQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    page?: number;
    perPage?: number;
    sort?: shared.SortEnum;
}
export declare class ActivityListReposStarredByAuthenticatedUserRequest extends SpeakeasyBase {
    queryParams: ActivityListReposStarredByAuthenticatedUserQueryParams;
}
export declare class ActivityListReposStarredByAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    repositories?: shared.Repository[];
    starredRepositories?: shared.StarredRepository[];
}
