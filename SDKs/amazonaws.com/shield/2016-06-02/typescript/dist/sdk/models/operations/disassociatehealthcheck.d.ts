import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateHealthCheckXAmzTargetEnum {
    AwsShield20160616DisassociateHealthCheck = "AWSShield_20160616.DisassociateHealthCheck"
}
export declare class DisassociateHealthCheckHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateHealthCheckXAmzTargetEnum;
}
export declare class DisassociateHealthCheckRequest extends SpeakeasyBase {
    headers: DisassociateHealthCheckHeaders;
    request: shared.DisassociateHealthCheckRequest;
}
export declare class DisassociateHealthCheckResponse extends SpeakeasyBase {
    contentType: string;
    disassociateHealthCheckResponse?: Map<string, any>;
    internalErrorException?: any;
    invalidParameterException?: any;
    optimisticLockException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
