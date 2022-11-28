import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddScheduledTasksPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class AddScheduledTasksQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class AddScheduledTasksRequest extends SpeakeasyBase {
    pathParams: AddScheduledTasksPathParams;
    queryParams: AddScheduledTasksQueryParams;
    request?: shared.ScheduledTask;
}
export declare class AddScheduledTasksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
