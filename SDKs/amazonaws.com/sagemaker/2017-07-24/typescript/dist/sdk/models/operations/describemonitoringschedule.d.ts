import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeMonitoringScheduleXAmzTargetEnum {
    SageMakerDescribeMonitoringSchedule = "SageMaker.DescribeMonitoringSchedule"
}
export declare class DescribeMonitoringScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMonitoringScheduleXAmzTargetEnum;
}
export declare class DescribeMonitoringScheduleRequest extends SpeakeasyBase {
    headers: DescribeMonitoringScheduleHeaders;
    request: shared.DescribeMonitoringScheduleRequest;
}
export declare class DescribeMonitoringScheduleResponse extends SpeakeasyBase {
    contentType: string;
    describeMonitoringScheduleResponse?: shared.DescribeMonitoringScheduleResponse;
    resourceNotFound?: any;
    statusCode: number;
}
