import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateBucketXAmzTargetEnum {
    Lightsail20161128UpdateBucket = "Lightsail_20161128.UpdateBucket"
}
export declare class UpdateBucketHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateBucketXAmzTargetEnum;
}
export declare class UpdateBucketRequest extends SpeakeasyBase {
    headers: UpdateBucketHeaders;
    request: shared.UpdateBucketRequest;
}
export declare class UpdateBucketResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
    updateBucketResult?: shared.UpdateBucketResult;
}
