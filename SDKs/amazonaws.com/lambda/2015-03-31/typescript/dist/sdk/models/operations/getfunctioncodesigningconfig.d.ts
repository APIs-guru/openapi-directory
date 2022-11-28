import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFunctionCodeSigningConfigPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class GetFunctionCodeSigningConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFunctionCodeSigningConfigRequest extends SpeakeasyBase {
    pathParams: GetFunctionCodeSigningConfigPathParams;
    headers: GetFunctionCodeSigningConfigHeaders;
}
export declare class GetFunctionCodeSigningConfigResponse extends SpeakeasyBase {
    contentType: string;
    getFunctionCodeSigningConfigResponse?: shared.GetFunctionCodeSigningConfigResponse;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
