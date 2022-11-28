import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateInstancesXAmzTargetEnum {
    Lightsail20161128CreateInstances = "Lightsail_20161128.CreateInstances"
}
export declare class CreateInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateInstancesXAmzTargetEnum;
}
export declare class CreateInstancesRequest extends SpeakeasyBase {
    headers: CreateInstancesHeaders;
    request: shared.CreateInstancesRequest;
}
export declare class CreateInstancesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createInstancesResult?: shared.CreateInstancesResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
