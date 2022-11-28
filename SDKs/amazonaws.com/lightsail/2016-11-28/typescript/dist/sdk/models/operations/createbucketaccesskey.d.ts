import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateBucketAccessKeyXAmzTargetEnum {
    Lightsail20161128CreateBucketAccessKey = "Lightsail_20161128.CreateBucketAccessKey"
}
export declare class CreateBucketAccessKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBucketAccessKeyXAmzTargetEnum;
}
export declare class CreateBucketAccessKeyRequest extends SpeakeasyBase {
    headers: CreateBucketAccessKeyHeaders;
    request: shared.CreateBucketAccessKeyRequest;
}
export declare class CreateBucketAccessKeyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createBucketAccessKeyResult?: shared.CreateBucketAccessKeyResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
