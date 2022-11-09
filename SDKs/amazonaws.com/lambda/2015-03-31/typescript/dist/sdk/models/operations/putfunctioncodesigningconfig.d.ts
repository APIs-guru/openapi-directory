import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutFunctionCodeSigningConfigPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class PutFunctionCodeSigningConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutFunctionCodeSigningConfigRequestBody extends SpeakeasyBase {
    codeSigningConfigArn: string;
}
export declare class PutFunctionCodeSigningConfigRequest extends SpeakeasyBase {
    pathParams: PutFunctionCodeSigningConfigPathParams;
    headers: PutFunctionCodeSigningConfigHeaders;
    request: PutFunctionCodeSigningConfigRequestBody;
}
export declare class PutFunctionCodeSigningConfigResponse extends SpeakeasyBase {
    codeSigningConfigNotFoundException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    putFunctionCodeSigningConfigResponse?: shared.PutFunctionCodeSigningConfigResponse;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
