import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsUpdateBranchPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsUpdateBranchRequestBody extends SpeakeasyBase {
    expectedHeadSha?: string;
}
export declare class PullsUpdateBranch202ApplicationJson extends SpeakeasyBase {
    message?: string;
    url?: string;
}
export declare class PullsUpdateBranch415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class PullsUpdateBranchRequest extends SpeakeasyBase {
    pathParams: PullsUpdateBranchPathParams;
    request?: PullsUpdateBranchRequestBody;
}
export declare class PullsUpdateBranchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    pullsUpdateBranch202ApplicationJsonObject?: PullsUpdateBranch202ApplicationJson;
    pullsUpdateBranch415ApplicationJsonObject?: PullsUpdateBranch415ApplicationJson;
    validationError?: shared.ValidationError;
}
