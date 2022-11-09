import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutResourcePolicyXAmzTargetEnum {
    Logs20140328PutResourcePolicy = "Logs_20140328.PutResourcePolicy"
}
export declare class PutResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResourcePolicyXAmzTargetEnum;
}
export declare class PutResourcePolicyRequest extends SpeakeasyBase {
    headers: PutResourcePolicyHeaders;
    request: shared.PutResourcePolicyRequest;
}
export declare class PutResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    limitExceededException?: any;
    putResourcePolicyResponse?: shared.PutResourcePolicyResponse;
    serviceUnavailableException?: any;
    statusCode: number;
}
