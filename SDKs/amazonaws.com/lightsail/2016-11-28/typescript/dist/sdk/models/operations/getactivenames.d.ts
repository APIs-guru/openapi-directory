import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetActiveNamesXAmzTargetEnum {
    Lightsail20161128GetActiveNames = "Lightsail_20161128.GetActiveNames"
}
export declare class GetActiveNamesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetActiveNamesXAmzTargetEnum;
}
export declare class GetActiveNamesRequest extends SpeakeasyBase {
    headers: GetActiveNamesHeaders;
    request: shared.GetActiveNamesRequest;
}
export declare class GetActiveNamesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getActiveNamesResult?: shared.GetActiveNamesResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
