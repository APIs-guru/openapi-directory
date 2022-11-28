import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateMonitoringScheduleXAmzTargetEnum {
    SageMakerCreateMonitoringSchedule = "SageMaker.CreateMonitoringSchedule"
}
export declare class CreateMonitoringScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMonitoringScheduleXAmzTargetEnum;
}
export declare class CreateMonitoringScheduleRequest extends SpeakeasyBase {
    headers: CreateMonitoringScheduleHeaders;
    request: shared.CreateMonitoringScheduleRequest;
}
export declare class CreateMonitoringScheduleResponse extends SpeakeasyBase {
    contentType: string;
    createMonitoringScheduleResponse?: shared.CreateMonitoringScheduleResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
