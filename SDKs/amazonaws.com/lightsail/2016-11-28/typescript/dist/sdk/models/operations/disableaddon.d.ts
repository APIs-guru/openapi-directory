import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisableAddOnXAmzTargetEnum {
    Lightsail20161128DisableAddOn = "Lightsail_20161128.DisableAddOn"
}
export declare class DisableAddOnHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableAddOnXAmzTargetEnum;
}
export declare class DisableAddOnRequest extends SpeakeasyBase {
    headers: DisableAddOnHeaders;
    request: shared.DisableAddOnRequest;
}
export declare class DisableAddOnResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    disableAddOnResult?: shared.DisableAddOnResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
