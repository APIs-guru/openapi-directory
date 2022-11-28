import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetachStaticIpXAmzTargetEnum {
    Lightsail20161128DetachStaticIp = "Lightsail_20161128.DetachStaticIp"
}
export declare class DetachStaticIpHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetachStaticIpXAmzTargetEnum;
}
export declare class DetachStaticIpRequest extends SpeakeasyBase {
    headers: DetachStaticIpHeaders;
    request: shared.DetachStaticIpRequest;
}
export declare class DetachStaticIpResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    detachStaticIpResult?: shared.DetachStaticIpResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
