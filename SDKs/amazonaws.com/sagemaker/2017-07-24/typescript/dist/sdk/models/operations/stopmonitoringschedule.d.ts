import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopMonitoringScheduleXAmzTargetEnum {
    SageMakerStopMonitoringSchedule = "SageMaker.StopMonitoringSchedule"
}
export declare class StopMonitoringScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopMonitoringScheduleXAmzTargetEnum;
}
export declare class StopMonitoringScheduleRequest extends SpeakeasyBase {
    headers: StopMonitoringScheduleHeaders;
    request: shared.StopMonitoringScheduleRequest;
}
export declare class StopMonitoringScheduleResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
