import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMonitoringExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListMonitoringExecutionsXAmzTargetEnum {
    SageMakerListMonitoringExecutions = "SageMaker.ListMonitoringExecutions"
}
export declare class ListMonitoringExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMonitoringExecutionsXAmzTargetEnum;
}
export declare class ListMonitoringExecutionsRequest extends SpeakeasyBase {
    queryParams: ListMonitoringExecutionsQueryParams;
    headers: ListMonitoringExecutionsHeaders;
    request: shared.ListMonitoringExecutionsRequest;
}
export declare class ListMonitoringExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    listMonitoringExecutionsResponse?: shared.ListMonitoringExecutionsResponse;
    statusCode: number;
}
