import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitGetCommitPathParams extends SpeakeasyBase {
    commitSha: string;
    owner: string;
    repo: string;
}
export declare class GitGetCommitRequest extends SpeakeasyBase {
    pathParams: GitGetCommitPathParams;
}
export declare class GitGetCommitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    gitCommit?: shared.GitCommit;
}
