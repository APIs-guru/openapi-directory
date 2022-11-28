import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AttachStaticIpXAmzTargetEnum {
    Lightsail20161128AttachStaticIp = "Lightsail_20161128.AttachStaticIp"
}
export declare class AttachStaticIpHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachStaticIpXAmzTargetEnum;
}
export declare class AttachStaticIpRequest extends SpeakeasyBase {
    headers: AttachStaticIpHeaders;
    request: shared.AttachStaticIpRequest;
}
export declare class AttachStaticIpResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    attachStaticIpResult?: shared.AttachStaticIpResult;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
