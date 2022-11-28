import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListStargazersForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActivityListStargazersForRepoQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActivityListStargazersForRepoRequest extends SpeakeasyBase {
    pathParams: ActivityListStargazersForRepoPathParams;
    queryParams: ActivityListStargazersForRepoQueryParams;
}
export declare class ActivityListStargazersForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    activityListStargazersForRepo200ApplicationJsonAnyOf?: any;
    validationError?: shared.ValidationError;
}
