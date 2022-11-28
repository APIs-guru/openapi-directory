import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReleaseStaticIpXAmzTargetEnum {
    Lightsail20161128ReleaseStaticIp = "Lightsail_20161128.ReleaseStaticIp"
}
export declare class ReleaseStaticIpHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReleaseStaticIpXAmzTargetEnum;
}
export declare class ReleaseStaticIpRequest extends SpeakeasyBase {
    headers: ReleaseStaticIpHeaders;
    request: shared.ReleaseStaticIpRequest;
}
export declare class ReleaseStaticIpResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    releaseStaticIpResult?: shared.ReleaseStaticIpResult;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
