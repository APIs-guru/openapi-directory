import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetBucketsXAmzTargetEnum {
    Lightsail20161128GetBuckets = "Lightsail_20161128.GetBuckets"
}
export declare class GetBucketsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBucketsXAmzTargetEnum;
}
export declare class GetBucketsRequest extends SpeakeasyBase {
    headers: GetBucketsHeaders;
    request: shared.GetBucketsRequest;
}
export declare class GetBucketsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getBucketsResult?: shared.GetBucketsResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
