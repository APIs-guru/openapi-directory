import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScheduledTaskPathParams extends SpeakeasyBase {
    domainName: string;
    scheduledTaskId: string;
}
export declare class GetScheduledTaskQueryParams extends SpeakeasyBase {
    domainName: string;
    scheduledTaskId: string;
}
export declare class GetScheduledTaskRequest extends SpeakeasyBase {
    pathParams: GetScheduledTaskPathParams;
    queryParams: GetScheduledTaskQueryParams;
}
export declare class GetScheduledTaskResponse extends SpeakeasyBase {
    contentType: string;
    scheduledTask?: shared.ScheduledTask;
    statusCode: number;
}
