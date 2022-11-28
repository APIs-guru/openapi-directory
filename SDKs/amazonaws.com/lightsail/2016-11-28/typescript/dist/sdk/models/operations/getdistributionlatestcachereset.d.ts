import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDistributionLatestCacheResetXAmzTargetEnum {
    Lightsail20161128GetDistributionLatestCacheReset = "Lightsail_20161128.GetDistributionLatestCacheReset"
}
export declare class GetDistributionLatestCacheResetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDistributionLatestCacheResetXAmzTargetEnum;
}
export declare class GetDistributionLatestCacheResetRequest extends SpeakeasyBase {
    headers: GetDistributionLatestCacheResetHeaders;
    request: shared.GetDistributionLatestCacheResetRequest;
}
export declare class GetDistributionLatestCacheResetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getDistributionLatestCacheResetResult?: shared.GetDistributionLatestCacheResetResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
