import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListReposStarredByUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class ActivityListReposStarredByUserQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    page?: number;
    perPage?: number;
    sort?: shared.SortEnum;
}
export declare class ActivityListReposStarredByUserRequest extends SpeakeasyBase {
    pathParams: ActivityListReposStarredByUserPathParams;
    queryParams: ActivityListReposStarredByUserQueryParams;
}
export declare class ActivityListReposStarredByUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    repositories?: shared.Repository[];
    starredRepositories?: shared.StarredRepository[];
}
