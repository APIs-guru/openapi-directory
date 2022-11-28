import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDisksXAmzTargetEnum {
    Lightsail20161128GetDisks = "Lightsail_20161128.GetDisks"
}
export declare class GetDisksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDisksXAmzTargetEnum;
}
export declare class GetDisksRequest extends SpeakeasyBase {
    headers: GetDisksHeaders;
    request: shared.GetDisksRequest;
}
export declare class GetDisksResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getDisksResult?: shared.GetDisksResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
