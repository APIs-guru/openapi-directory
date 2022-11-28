import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListReposLegacyPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsListReposLegacyQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class TeamsListReposLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsListReposLegacyPathParams;
    queryParams: TeamsListReposLegacyQueryParams;
}
export declare class TeamsListReposLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    minimalRepositories?: shared.MinimalRepository[];
}
