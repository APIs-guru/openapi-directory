import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsGetStatusForOrgPathParams extends SpeakeasyBase {
    migrationId: number;
    org: string;
}
export declare enum MigrationsGetStatusForOrgExcludeEnum {
    Repositories = "repositories"
}
export declare class MigrationsGetStatusForOrgQueryParams extends SpeakeasyBase {
    exclude?: MigrationsGetStatusForOrgExcludeEnum[];
}
export declare class MigrationsGetStatusForOrgRequest extends SpeakeasyBase {
    pathParams: MigrationsGetStatusForOrgPathParams;
    queryParams: MigrationsGetStatusForOrgQueryParams;
}
export declare class MigrationsGetStatusForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    migration?: shared.Migration;
}
