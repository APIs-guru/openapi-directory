import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListForksPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum ReposListForksSortEnum {
    Newest = "newest",
    Oldest = "oldest",
    Stargazers = "stargazers",
    Watchers = "watchers"
}
export declare class ReposListForksQueryParams extends SpeakeasyBase {
    org?: string;
    organization?: string;
    page?: number;
    perPage?: number;
    sort?: ReposListForksSortEnum;
}
export declare class ReposListForksRequest extends SpeakeasyBase {
    pathParams: ReposListForksPathParams;
    queryParams: ReposListForksQueryParams;
}
export declare class ReposListForksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    minimalRepositories?: shared.MinimalRepository[];
    scimError?: shared.ScimError;
}
