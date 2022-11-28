import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetInstanceMetricDataXAmzTargetEnum {
    Lightsail20161128GetInstanceMetricData = "Lightsail_20161128.GetInstanceMetricData"
}
export declare class GetInstanceMetricDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstanceMetricDataXAmzTargetEnum;
}
export declare class GetInstanceMetricDataRequest extends SpeakeasyBase {
    headers: GetInstanceMetricDataHeaders;
    request: shared.GetInstanceMetricDataRequest;
}
export declare class GetInstanceMetricDataResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getInstanceMetricDataResult?: shared.GetInstanceMetricDataResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
