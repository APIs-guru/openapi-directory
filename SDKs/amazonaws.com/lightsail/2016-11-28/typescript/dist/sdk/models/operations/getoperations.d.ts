import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetOperationsXAmzTargetEnum {
    Lightsail20161128GetOperations = "Lightsail_20161128.GetOperations"
}
export declare class GetOperationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOperationsXAmzTargetEnum;
}
export declare class GetOperationsRequest extends SpeakeasyBase {
    headers: GetOperationsHeaders;
    request: shared.GetOperationsRequest;
}
export declare class GetOperationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getOperationsResult?: shared.GetOperationsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
