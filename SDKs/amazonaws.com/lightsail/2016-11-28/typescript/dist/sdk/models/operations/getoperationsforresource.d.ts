import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetOperationsForResourceXAmzTargetEnum {
    Lightsail20161128GetOperationsForResource = "Lightsail_20161128.GetOperationsForResource"
}
export declare class GetOperationsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOperationsForResourceXAmzTargetEnum;
}
export declare class GetOperationsForResourceRequest extends SpeakeasyBase {
    headers: GetOperationsForResourceHeaders;
    request: shared.GetOperationsForResourceRequest;
}
export declare class GetOperationsForResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getOperationsForResourceResult?: shared.GetOperationsForResourceResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
