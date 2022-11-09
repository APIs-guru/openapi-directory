import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RegisterUsageXAmzTargetEnum {
    AwsmpMeteringServiceRegisterUsage = "AWSMPMeteringService.RegisterUsage"
}
export declare class RegisterUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterUsageXAmzTargetEnum;
}
export declare class RegisterUsageRequest extends SpeakeasyBase {
    headers: RegisterUsageHeaders;
    request: shared.RegisterUsageRequest;
}
export declare class RegisterUsageResponse extends SpeakeasyBase {
    contentType: string;
    customerNotEntitledException?: any;
    disabledApiException?: any;
    internalServiceErrorException?: any;
    invalidProductCodeException?: any;
    invalidPublicKeyVersionException?: any;
    invalidRegionException?: any;
    platformNotSupportedException?: any;
    registerUsageResult?: shared.RegisterUsageResult;
    statusCode: number;
    throttlingException?: any;
}
