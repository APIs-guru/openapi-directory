import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartMonitoringScheduleXAmzTargetEnum {
    SageMakerStartMonitoringSchedule = "SageMaker.StartMonitoringSchedule"
}
export declare class StartMonitoringScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMonitoringScheduleXAmzTargetEnum;
}
export declare class StartMonitoringScheduleRequest extends SpeakeasyBase {
    headers: StartMonitoringScheduleHeaders;
    request: shared.StartMonitoringScheduleRequest;
}
export declare class StartMonitoringScheduleResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
