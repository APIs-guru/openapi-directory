import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListWatchersForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActivityListWatchersForRepoQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActivityListWatchersForRepoRequest extends SpeakeasyBase {
    pathParams: ActivityListWatchersForRepoPathParams;
    queryParams: ActivityListWatchersForRepoQueryParams;
}
export declare class ActivityListWatchersForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
}
