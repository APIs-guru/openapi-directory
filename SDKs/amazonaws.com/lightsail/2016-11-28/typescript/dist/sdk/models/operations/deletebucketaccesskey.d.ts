import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteBucketAccessKeyXAmzTargetEnum {
    Lightsail20161128DeleteBucketAccessKey = "Lightsail_20161128.DeleteBucketAccessKey"
}
export declare class DeleteBucketAccessKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBucketAccessKeyXAmzTargetEnum;
}
export declare class DeleteBucketAccessKeyRequest extends SpeakeasyBase {
    headers: DeleteBucketAccessKeyHeaders;
    request: shared.DeleteBucketAccessKeyRequest;
}
export declare class DeleteBucketAccessKeyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteBucketAccessKeyResult?: shared.DeleteBucketAccessKeyResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
