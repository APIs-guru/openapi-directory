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
export declare class ReposMergeRequest extends SpeakeasyBase {
    pathParams: ReposMergePathParams;
    request?: ReposMergeRequestBody;
}
export declare class ReposMergeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    commit?: shared.Commit;
    validationError?: shared.ValidationError;
}
