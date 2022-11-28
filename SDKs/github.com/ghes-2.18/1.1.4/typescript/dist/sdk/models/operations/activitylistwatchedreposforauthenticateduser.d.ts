import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListWatchedReposForAuthenticatedUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActivityListWatchedReposForAuthenticatedUserRequest extends SpeakeasyBase {
    queryParams: ActivityListWatchedReposForAuthenticatedUserQueryParams;
}
export declare class ActivityListWatchedReposForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    minimalRepositories?: shared.MinimalRepository[];
}
