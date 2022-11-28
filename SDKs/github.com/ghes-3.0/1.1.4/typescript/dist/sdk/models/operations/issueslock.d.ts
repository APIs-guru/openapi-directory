import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesLockPathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare enum IssuesLockRequestBodyLockReasonEnum {
    OffTopic = "off-topic",
    TooHeated = "too heated",
    Resolved = "resolved",
    Spam = "spam"
}
export declare class IssuesLockRequestBody extends SpeakeasyBase {
    lockReason?: IssuesLockRequestBodyLockReasonEnum;
}
export declare class IssuesLockRequest extends SpeakeasyBase {
    pathParams: IssuesLockPathParams;
    request?: IssuesLockRequestBody;
}
export declare class IssuesLockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    validationError?: shared.ValidationError;
}
