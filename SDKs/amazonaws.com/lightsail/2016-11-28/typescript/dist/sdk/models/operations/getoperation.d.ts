import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetOperationXAmzTargetEnum {
    Lightsail20161128GetOperation = "Lightsail_20161128.GetOperation"
}
export declare class GetOperationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOperationXAmzTargetEnum;
}
export declare class GetOperationRequest extends SpeakeasyBase {
    headers: GetOperationHeaders;
    request: shared.GetOperationRequest;
}
export declare class GetOperationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getOperationResult?: shared.GetOperationResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
