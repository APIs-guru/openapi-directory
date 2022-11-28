import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsStartForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class MigrationsStartForOrgRequestBody extends SpeakeasyBase {
    exclude?: string[];
    excludeAttachments?: boolean;
    lockRepositories?: boolean;
    repositories: string[];
}
export declare class MigrationsStartForOrgRequest extends SpeakeasyBase {
    pathParams: MigrationsStartForOrgPathParams;
    request?: MigrationsStartForOrgRequestBody;
}
export declare class MigrationsStartForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    migration?: shared.Migration;
    validationError?: shared.ValidationError;
}
