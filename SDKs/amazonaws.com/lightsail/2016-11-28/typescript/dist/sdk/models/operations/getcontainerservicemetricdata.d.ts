import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetContainerServiceMetricDataXAmzTargetEnum {
    Lightsail20161128GetContainerServiceMetricData = "Lightsail_20161128.GetContainerServiceMetricData"
}
export declare class GetContainerServiceMetricDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContainerServiceMetricDataXAmzTargetEnum;
}
export declare class GetContainerServiceMetricDataRequest extends SpeakeasyBase {
    headers: GetContainerServiceMetricDataHeaders;
    request: shared.GetContainerServiceMetricDataRequest;
}
export declare class GetContainerServiceMetricDataResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getContainerServiceMetricDataResult?: shared.GetContainerServiceMetricDataResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
