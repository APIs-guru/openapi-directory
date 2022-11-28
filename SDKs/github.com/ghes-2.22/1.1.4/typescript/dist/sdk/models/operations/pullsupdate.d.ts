import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsUpdatePathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare enum PullsUpdateRequestBodyStateEnum {
    Open = "open",
    Closed = "closed"
}
export declare class PullsUpdateRequestBody extends SpeakeasyBase {
    base?: string;
    body?: string;
    maintainerCanModify?: boolean;
    state?: PullsUpdateRequestBodyStateEnum;
    title?: string;
}
export declare class PullsUpdateRequest extends SpeakeasyBase {
    pathParams: PullsUpdatePathParams;
    request?: PullsUpdateRequestBody;
}
export declare class PullsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    pullRequest?: shared.PullRequest;
    validationError?: shared.ValidationError;
}
