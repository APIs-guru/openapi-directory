import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListReposWatchedByUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class ActivityListReposWatchedByUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActivityListReposWatchedByUserRequest extends SpeakeasyBase {
    pathParams: ActivityListReposWatchedByUserPathParams;
    queryParams: ActivityListReposWatchedByUserQueryParams;
}
export declare class ActivityListReposWatchedByUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    minimalRepositories?: shared.MinimalRepository[];
}
