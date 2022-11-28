import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetInstancesXAmzTargetEnum {
    Lightsail20161128GetInstances = "Lightsail_20161128.GetInstances"
}
export declare class GetInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstancesXAmzTargetEnum;
}
export declare class GetInstancesRequest extends SpeakeasyBase {
    headers: GetInstancesHeaders;
    request: shared.GetInstancesRequest;
}
export declare class GetInstancesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getInstancesResult?: shared.GetInstancesResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
