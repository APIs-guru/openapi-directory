import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFunctionCodeSigningConfigPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class DeleteFunctionCodeSigningConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFunctionCodeSigningConfigRequest extends SpeakeasyBase {
    pathParams: DeleteFunctionCodeSigningConfigPathParams;
    headers: DeleteFunctionCodeSigningConfigHeaders;
}
export declare class DeleteFunctionCodeSigningConfigResponse extends SpeakeasyBase {
    codeSigningConfigNotFoundException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
