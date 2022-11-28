import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScheduledTasksPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetScheduledTasksQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetScheduledTasksRequest extends SpeakeasyBase {
    pathParams: GetScheduledTasksPathParams;
    queryParams: GetScheduledTasksQueryParams;
}
export declare class GetScheduledTasksResponse extends SpeakeasyBase {
    contentType: string;
    scheduledTasks?: shared.ScheduledTask[];
    statusCode: number;
}
