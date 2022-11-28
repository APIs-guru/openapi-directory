import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListReposPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsListReposQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class TeamsListReposRequest extends SpeakeasyBase {
    pathParams: TeamsListReposPathParams;
    queryParams: TeamsListReposQueryParams;
}
export declare class TeamsListReposResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    minimalRepositories?: shared.MinimalRepository[];
}
