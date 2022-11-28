import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateMonitoringScheduleXAmzTargetEnum {
    SageMakerUpdateMonitoringSchedule = "SageMaker.UpdateMonitoringSchedule"
}
export declare class UpdateMonitoringScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMonitoringScheduleXAmzTargetEnum;
}
export declare class UpdateMonitoringScheduleRequest extends SpeakeasyBase {
    headers: UpdateMonitoringScheduleHeaders;
    request: shared.UpdateMonitoringScheduleRequest;
}
export declare class UpdateMonitoringScheduleResponse extends SpeakeasyBase {
    contentType: string;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    statusCode: number;
    updateMonitoringScheduleResponse?: shared.UpdateMonitoringScheduleResponse;
}
