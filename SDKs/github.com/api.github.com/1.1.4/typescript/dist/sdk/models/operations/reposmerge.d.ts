import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposMergePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposMergeRequestBody extends SpeakeasyBase {
    base: string;
    commitMessage?: string;
    head: string;
}
export declare class ReposMerge404ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class ReposMerge409ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class ReposMergeRequest extends SpeakeasyBase {
    pathParams: ReposMergePathParams;
    request?: ReposMergeRequestBody;
}
export declare class ReposMergeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    commit?: shared.Commit;
    reposMerge404ApplicationJsonObject?: ReposMerge404ApplicationJson;
    reposMerge409ApplicationJsonObject?: ReposMerge409ApplicationJson;
    validationError?: shared.ValidationError;
}
