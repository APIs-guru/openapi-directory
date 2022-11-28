import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureScheduledTaskPathParams extends SpeakeasyBase {
    domainName: string;
    scheduledTaskId: string;
}
export declare class ConfigureScheduledTaskQueryParams extends SpeakeasyBase {
    domainName: string;
    scheduledTaskId: string;
}
export declare class ConfigureScheduledTaskRequest extends SpeakeasyBase {
    pathParams: ConfigureScheduledTaskPathParams;
    queryParams: ConfigureScheduledTaskQueryParams;
    request?: shared.ScheduledTask;
}
export declare class ConfigureScheduledTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
