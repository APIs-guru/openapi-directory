import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopInstanceXAmzTargetEnum {
    Lightsail20161128StopInstance = "Lightsail_20161128.StopInstance"
}
export declare class StopInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopInstanceXAmzTargetEnum;
}
export declare class StopInstanceRequest extends SpeakeasyBase {
    headers: StopInstanceHeaders;
    request: shared.StopInstanceRequest;
}
export declare class StopInstanceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    stopInstanceResult?: shared.StopInstanceResult;
    unauthenticatedException?: any;
}
