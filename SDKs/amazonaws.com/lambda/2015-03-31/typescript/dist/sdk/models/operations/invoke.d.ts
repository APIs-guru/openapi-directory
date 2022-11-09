import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class InvokePathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class InvokeQueryParams extends SpeakeasyBase {
    qualifier?: string;
}
export declare enum InvokeXAmzInvocationTypeEnum {
    Event = "Event",
    RequestResponse = "RequestResponse",
    DryRun = "DryRun"
}
export declare enum InvokeXAmzLogTypeEnum {
    None = "None",
    Tail = "Tail"
}
export declare class InvokeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientContext?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzInvocationType?: InvokeXAmzInvocationTypeEnum;
    xAmzLogType?: InvokeXAmzLogTypeEnum;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class InvokeRequestBody extends SpeakeasyBase {
    payload?: string;
}
export declare class InvokeRequest extends SpeakeasyBase {
    pathParams: InvokePathParams;
    queryParams: InvokeQueryParams;
    headers: InvokeHeaders;
    request: InvokeRequestBody;
}
export declare class InvokeResponse extends SpeakeasyBase {
    contentType: string;
    ec2AccessDeniedException?: any;
    ec2ThrottledException?: any;
    ec2UnexpectedException?: any;
    efsioException?: any;
    efsMountConnectivityException?: any;
    efsMountFailureException?: any;
    efsMountTimeoutException?: any;
    eniLimitReachedException?: any;
    invalidParameterValueException?: any;
    invalidRequestContentException?: any;
    invalidRuntimeException?: any;
    invalidSecurityGroupIdException?: any;
    invalidSubnetIdException?: any;
    invalidZipFileException?: any;
    invocationResponse?: shared.InvocationResponse;
    kmsAccessDeniedException?: any;
    kmsDisabledException?: any;
    kmsInvalidStateException?: any;
    kmsNotFoundException?: any;
    requestTooLargeException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    resourceNotReadyException?: any;
    serviceException?: any;
    statusCode: number;
    subnetIpAddressLimitReachedException?: any;
    tooManyRequestsException?: any;
    unsupportedMediaTypeException?: any;
}
