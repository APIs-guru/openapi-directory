import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateBucketXAmzTargetEnum {
    Lightsail20161128CreateBucket = "Lightsail_20161128.CreateBucket"
}
export declare class CreateBucketHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBucketXAmzTargetEnum;
}
export declare class CreateBucketRequest extends SpeakeasyBase {
    headers: CreateBucketHeaders;
    request: shared.CreateBucketRequest;
}
export declare class CreateBucketResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createBucketResult?: shared.CreateBucketResult;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
