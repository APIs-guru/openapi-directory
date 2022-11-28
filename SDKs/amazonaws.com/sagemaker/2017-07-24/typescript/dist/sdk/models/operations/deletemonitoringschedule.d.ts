import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteMonitoringScheduleXAmzTargetEnum {
    SageMakerDeleteMonitoringSchedule = "SageMaker.DeleteMonitoringSchedule"
}
export declare class DeleteMonitoringScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMonitoringScheduleXAmzTargetEnum;
}
export declare class DeleteMonitoringScheduleRequest extends SpeakeasyBase {
    headers: DeleteMonitoringScheduleHeaders;
    request: shared.DeleteMonitoringScheduleRequest;
}
export declare class DeleteMonitoringScheduleResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
