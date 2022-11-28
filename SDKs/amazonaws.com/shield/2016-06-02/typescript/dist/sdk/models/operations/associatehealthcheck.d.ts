import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateHealthCheckXAmzTargetEnum {
    AwsShield20160616AssociateHealthCheck = "AWSShield_20160616.AssociateHealthCheck"
}
export declare class AssociateHealthCheckHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateHealthCheckXAmzTargetEnum;
}
export declare class AssociateHealthCheckRequest extends SpeakeasyBase {
    headers: AssociateHealthCheckHeaders;
    request: shared.AssociateHealthCheckRequest;
}
export declare class AssociateHealthCheckResponse extends SpeakeasyBase {
    associateHealthCheckResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    limitsExceededException?: any;
    optimisticLockException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
