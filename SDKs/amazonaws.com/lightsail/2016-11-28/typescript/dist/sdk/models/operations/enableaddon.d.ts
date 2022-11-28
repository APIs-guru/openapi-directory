import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnableAddOnXAmzTargetEnum {
    Lightsail20161128EnableAddOn = "Lightsail_20161128.EnableAddOn"
}
export declare class EnableAddOnHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableAddOnXAmzTargetEnum;
}
export declare class EnableAddOnRequest extends SpeakeasyBase {
    headers: EnableAddOnHeaders;
    request: shared.EnableAddOnRequest;
}
export declare class EnableAddOnResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    enableAddOnResult?: shared.EnableAddOnResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
