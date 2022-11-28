import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateCommitStatusPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    sha: string;
}
export declare enum ReposCreateCommitStatusRequestBodyStateEnum {
    Error = "error",
    Failure = "failure",
    Pending = "pending",
    Success = "success"
}
export declare class ReposCreateCommitStatusRequestBody extends SpeakeasyBase {
    context?: string;
    description?: string;
    state: ReposCreateCommitStatusRequestBodyStateEnum;
    targetUrl?: string;
}
export declare class ReposCreateCommitStatusRequest extends SpeakeasyBase {
    pathParams: ReposCreateCommitStatusPathParams;
    request?: ReposCreateCommitStatusRequestBody;
}
export declare class ReposCreateCommitStatusResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    status?: shared.Status;
}
