import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsMergePathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare enum PullsMergeRequestBodyMergeMethodEnum {
    Merge = "merge",
    Squash = "squash",
    Rebase = "rebase"
}
export declare class PullsMergeRequestBody extends SpeakeasyBase {
    commitMessage?: string;
    commitTitle?: string;
    mergeMethod?: PullsMergeRequestBodyMergeMethodEnum;
    sha?: string;
}
export declare class PullsMerge405ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class PullsMerge409ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class PullsMergeRequest extends SpeakeasyBase {
    pathParams: PullsMergePathParams;
    request?: PullsMergeRequestBody;
}
export declare class PullsMergeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    pullRequestMergeResult?: shared.PullRequestMergeResult;
    pullsMerge405ApplicationJsonObject?: PullsMerge405ApplicationJson;
    pullsMerge409ApplicationJsonObject?: PullsMerge409ApplicationJson;
    validationError?: shared.ValidationError;
}
