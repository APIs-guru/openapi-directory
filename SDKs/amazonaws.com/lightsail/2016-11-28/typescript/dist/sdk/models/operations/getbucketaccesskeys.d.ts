import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetBucketAccessKeysXAmzTargetEnum {
    Lightsail20161128GetBucketAccessKeys = "Lightsail_20161128.GetBucketAccessKeys"
}
export declare class GetBucketAccessKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBucketAccessKeysXAmzTargetEnum;
}
export declare class GetBucketAccessKeysRequest extends SpeakeasyBase {
    headers: GetBucketAccessKeysHeaders;
    request: shared.GetBucketAccessKeysRequest;
}
export declare class GetBucketAccessKeysResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getBucketAccessKeysResult?: shared.GetBucketAccessKeysResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
