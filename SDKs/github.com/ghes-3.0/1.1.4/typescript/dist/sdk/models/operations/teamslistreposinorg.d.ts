import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListReposInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
}
export declare class TeamsListReposInOrgQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class TeamsListReposInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsListReposInOrgPathParams;
    queryParams: TeamsListReposInOrgQueryParams;
}
export declare class TeamsListReposInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    minimalRepositories?: shared.MinimalRepository[];
}
