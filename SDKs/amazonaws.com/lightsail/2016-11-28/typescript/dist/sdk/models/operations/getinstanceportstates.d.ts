import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetInstancePortStatesXAmzTargetEnum {
    Lightsail20161128GetInstancePortStates = "Lightsail_20161128.GetInstancePortStates"
}
export declare class GetInstancePortStatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstancePortStatesXAmzTargetEnum;
}
export declare class GetInstancePortStatesRequest extends SpeakeasyBase {
    headers: GetInstancePortStatesHeaders;
    request: shared.GetInstancePortStatesRequest;
}
export declare class GetInstancePortStatesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getInstancePortStatesResult?: shared.GetInstancePortStatesResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
