import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ResolveCustomerXAmzTargetEnum {
    AwsmpMeteringServiceResolveCustomer = "AWSMPMeteringService.ResolveCustomer"
}
export declare class ResolveCustomerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResolveCustomerXAmzTargetEnum;
}
export declare class ResolveCustomerRequest extends SpeakeasyBase {
    headers: ResolveCustomerHeaders;
    request: shared.ResolveCustomerRequest;
}
export declare class ResolveCustomerResponse extends SpeakeasyBase {
    contentType: string;
    disabledApiException?: any;
    expiredTokenException?: any;
    internalServiceErrorException?: any;
    invalidTokenException?: any;
    resolveCustomerResult?: shared.ResolveCustomerResult;
    statusCode: number;
    throttlingException?: any;
}
