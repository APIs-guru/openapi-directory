import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPolicyPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class GetPolicyQueryParams extends SpeakeasyBase {
    qualifier?: string;
}
export declare class GetPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPolicyRequest extends SpeakeasyBase {
    pathParams: GetPolicyPathParams;
    queryParams: GetPolicyQueryParams;
    headers: GetPolicyHeaders;
}
export declare class GetPolicyResponse extends SpeakeasyBase {
    contentType: string;
    getPolicyResponse?: shared.GetPolicyResponse;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
