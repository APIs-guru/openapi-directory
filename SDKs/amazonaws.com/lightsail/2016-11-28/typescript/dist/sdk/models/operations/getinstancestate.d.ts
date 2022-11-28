import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetInstanceStateXAmzTargetEnum {
    Lightsail20161128GetInstanceState = "Lightsail_20161128.GetInstanceState"
}
export declare class GetInstanceStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstanceStateXAmzTargetEnum;
}
export declare class GetInstanceStateRequest extends SpeakeasyBase {
    headers: GetInstanceStateHeaders;
    request: shared.GetInstanceStateRequest;
}
export declare class GetInstanceStateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getInstanceStateResult?: shared.GetInstanceStateResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
