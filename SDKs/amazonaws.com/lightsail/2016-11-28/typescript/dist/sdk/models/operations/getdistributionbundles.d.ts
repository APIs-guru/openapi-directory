import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDistributionBundlesXAmzTargetEnum {
    Lightsail20161128GetDistributionBundles = "Lightsail_20161128.GetDistributionBundles"
}
export declare class GetDistributionBundlesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDistributionBundlesXAmzTargetEnum;
}
export declare class GetDistributionBundlesRequest extends SpeakeasyBase {
    headers: GetDistributionBundlesHeaders;
    request: Map<string, any>;
}
export declare class GetDistributionBundlesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getDistributionBundlesResult?: shared.GetDistributionBundlesResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
