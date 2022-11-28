import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartInstanceXAmzTargetEnum {
    Lightsail20161128StartInstance = "Lightsail_20161128.StartInstance"
}
export declare class StartInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartInstanceXAmzTargetEnum;
}
export declare class StartInstanceRequest extends SpeakeasyBase {
    headers: StartInstanceHeaders;
    request: shared.StartInstanceRequest;
}
export declare class StartInstanceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    startInstanceResult?: shared.StartInstanceResult;
    statusCode: number;
    unauthenticatedException?: any;
}
