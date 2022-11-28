import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMonitoringSchedulesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListMonitoringSchedulesXAmzTargetEnum {
    SageMakerListMonitoringSchedules = "SageMaker.ListMonitoringSchedules"
}
export declare class ListMonitoringSchedulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMonitoringSchedulesXAmzTargetEnum;
}
export declare class ListMonitoringSchedulesRequest extends SpeakeasyBase {
    queryParams: ListMonitoringSchedulesQueryParams;
    headers: ListMonitoringSchedulesHeaders;
    request: shared.ListMonitoringSchedulesRequest;
}
export declare class ListMonitoringSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    listMonitoringSchedulesResponse?: shared.ListMonitoringSchedulesResponse;
    statusCode: number;
}
