import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteBucketXAmzTargetEnum {
    Lightsail20161128DeleteBucket = "Lightsail_20161128.DeleteBucket"
}
export declare class DeleteBucketHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBucketXAmzTargetEnum;
}
export declare class DeleteBucketRequest extends SpeakeasyBase {
    headers: DeleteBucketHeaders;
    request: shared.DeleteBucketRequest;
}
export declare class DeleteBucketResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteBucketResult?: shared.DeleteBucketResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
