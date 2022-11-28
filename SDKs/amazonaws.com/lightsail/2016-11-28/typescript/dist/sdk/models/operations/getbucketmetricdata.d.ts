import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetBucketMetricDataXAmzTargetEnum {
    Lightsail20161128GetBucketMetricData = "Lightsail_20161128.GetBucketMetricData"
}
export declare class GetBucketMetricDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBucketMetricDataXAmzTargetEnum;
}
export declare class GetBucketMetricDataRequest extends SpeakeasyBase {
    headers: GetBucketMetricDataHeaders;
    request: shared.GetBucketMetricDataRequest;
}
export declare class GetBucketMetricDataResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getBucketMetricDataResult?: shared.GetBucketMetricDataResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
