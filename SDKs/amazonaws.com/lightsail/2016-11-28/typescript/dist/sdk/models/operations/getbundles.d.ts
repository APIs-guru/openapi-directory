import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetBundlesXAmzTargetEnum {
    Lightsail20161128GetBundles = "Lightsail_20161128.GetBundles"
}
export declare class GetBundlesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBundlesXAmzTargetEnum;
}
export declare class GetBundlesRequest extends SpeakeasyBase {
    headers: GetBundlesHeaders;
    request: shared.GetBundlesRequest;
}
export declare class GetBundlesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getBundlesResult?: shared.GetBundlesResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
