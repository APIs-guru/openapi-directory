import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsStartImportPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum MigrationsStartImportRequestBodyVcsEnum {
    Subversion = "subversion",
    Git = "git",
    Mercurial = "mercurial",
    Tfvc = "tfvc"
}
export declare class MigrationsStartImportRequestBody extends SpeakeasyBase {
    tfvcProject?: string;
    vcs?: MigrationsStartImportRequestBodyVcsEnum;
    vcsPassword?: string;
    vcsUrl: string;
    vcsUsername?: string;
}
export declare class MigrationsStartImportRequest extends SpeakeasyBase {
    pathParams: MigrationsStartImportPathParams;
    request?: MigrationsStartImportRequestBody;
}
export declare class MigrationsStartImportResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    import?: shared.Import;
    validationError?: shared.ValidationError;
}
