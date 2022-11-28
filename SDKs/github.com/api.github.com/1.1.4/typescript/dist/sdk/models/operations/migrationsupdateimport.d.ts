import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsUpdateImportPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class MigrationsUpdateImportRequestBody extends SpeakeasyBase {
    tfvcProject?: string;
    vcs?: string;
    vcsPassword?: string;
    vcsUsername?: string;
}
export declare class MigrationsUpdateImportRequest extends SpeakeasyBase {
    pathParams: MigrationsUpdateImportPathParams;
    request?: MigrationsUpdateImportRequestBody;
}
export declare class MigrationsUpdateImportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    import?: shared.Import;
}
