import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsGetImportStatusPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class MigrationsGetImportStatusRequest extends SpeakeasyBase {
    pathParams: MigrationsGetImportStatusPathParams;
}
export declare class MigrationsGetImportStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    import?: shared.Import;
}
