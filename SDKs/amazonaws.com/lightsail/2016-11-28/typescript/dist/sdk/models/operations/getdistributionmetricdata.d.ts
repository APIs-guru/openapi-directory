import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDistributionMetricDataXAmzTargetEnum {
    Lightsail20161128GetDistributionMetricData = "Lightsail_20161128.GetDistributionMetricData"
}
export declare class GetDistributionMetricDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDistributionMetricDataXAmzTargetEnum;
}
export declare class GetDistributionMetricDataRequest extends SpeakeasyBase {
    headers: GetDistributionMetricDataHeaders;
    request: shared.GetDistributionMetricDataRequest;
}
export declare class GetDistributionMetricDataResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getDistributionMetricDataResult?: shared.GetDistributionMetricDataResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
