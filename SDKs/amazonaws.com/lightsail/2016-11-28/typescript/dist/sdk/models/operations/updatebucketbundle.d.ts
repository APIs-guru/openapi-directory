import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateBucketBundleXAmzTargetEnum {
    Lightsail20161128UpdateBucketBundle = "Lightsail_20161128.UpdateBucketBundle"
}
export declare class UpdateBucketBundleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateBucketBundleXAmzTargetEnum;
}
export declare class UpdateBucketBundleRequest extends SpeakeasyBase {
    headers: UpdateBucketBundleHeaders;
    request: shared.UpdateBucketBundleRequest;
}
export declare class UpdateBucketBundleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
    updateBucketBundleResult?: shared.UpdateBucketBundleResult;
}
