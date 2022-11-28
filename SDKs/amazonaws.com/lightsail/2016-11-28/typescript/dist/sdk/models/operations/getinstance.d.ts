import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetInstanceXAmzTargetEnum {
    Lightsail20161128GetInstance = "Lightsail_20161128.GetInstance"
}
export declare class GetInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstanceXAmzTargetEnum;
}
export declare class GetInstanceRequest extends SpeakeasyBase {
    headers: GetInstanceHeaders;
    request: shared.GetInstanceRequest;
}
export declare class GetInstanceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getInstanceResult?: shared.GetInstanceResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
