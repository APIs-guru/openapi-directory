import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsListForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare enum MigrationsListForOrgExcludeEnum {
    Repositories = "repositories"
}
export declare class MigrationsListForOrgQueryParams extends SpeakeasyBase {
    exclude?: MigrationsListForOrgExcludeEnum[];
    page?: number;
    perPage?: number;
}
export declare class MigrationsListForOrgRequest extends SpeakeasyBase {
    pathParams: MigrationsListForOrgPathParams;
    queryParams: MigrationsListForOrgQueryParams;
}
export declare class MigrationsListForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    migrations?: shared.Migration[];
}
