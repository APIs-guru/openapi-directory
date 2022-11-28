import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AllocateStaticIpXAmzTargetEnum {
    Lightsail20161128AllocateStaticIp = "Lightsail_20161128.AllocateStaticIp"
}
export declare class AllocateStaticIpHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AllocateStaticIpXAmzTargetEnum;
}
export declare class AllocateStaticIpRequest extends SpeakeasyBase {
    headers: AllocateStaticIpHeaders;
    request: shared.AllocateStaticIpRequest;
}
export declare class AllocateStaticIpResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    allocateStaticIpResult?: shared.AllocateStaticIpResult;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
