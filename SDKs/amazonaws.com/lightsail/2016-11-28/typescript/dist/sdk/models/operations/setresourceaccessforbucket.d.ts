import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetResourceAccessForBucketXAmzTargetEnum {
    Lightsail20161128SetResourceAccessForBucket = "Lightsail_20161128.SetResourceAccessForBucket"
}
export declare class SetResourceAccessForBucketHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetResourceAccessForBucketXAmzTargetEnum;
}
export declare class SetResourceAccessForBucketRequest extends SpeakeasyBase {
    headers: SetResourceAccessForBucketHeaders;
    request: shared.SetResourceAccessForBucketRequest;
}
export declare class SetResourceAccessForBucketResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    setResourceAccessForBucketResult?: shared.SetResourceAccessForBucketResult;
    statusCode: number;
    unauthenticatedException?: any;
}
