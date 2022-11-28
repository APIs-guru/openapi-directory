import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetBucketBundlesXAmzTargetEnum {
    Lightsail20161128GetBucketBundles = "Lightsail_20161128.GetBucketBundles"
}
export declare class GetBucketBundlesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBucketBundlesXAmzTargetEnum;
}
export declare class GetBucketBundlesRequest extends SpeakeasyBase {
    headers: GetBucketBundlesHeaders;
    request: shared.GetBucketBundlesRequest;
}
export declare class GetBucketBundlesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getBucketBundlesResult?: shared.GetBucketBundlesResult;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
