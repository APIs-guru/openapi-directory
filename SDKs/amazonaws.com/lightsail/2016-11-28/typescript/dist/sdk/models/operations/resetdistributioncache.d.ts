import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ResetDistributionCacheXAmzTargetEnum {
    Lightsail20161128ResetDistributionCache = "Lightsail_20161128.ResetDistributionCache"
}
export declare class ResetDistributionCacheHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResetDistributionCacheXAmzTargetEnum;
}
export declare class ResetDistributionCacheRequest extends SpeakeasyBase {
    headers: ResetDistributionCacheHeaders;
    request: shared.ResetDistributionCacheRequest;
}
export declare class ResetDistributionCacheResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    resetDistributionCacheResult?: shared.ResetDistributionCacheResult;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
