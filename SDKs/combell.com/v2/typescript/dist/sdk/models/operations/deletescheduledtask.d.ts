import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteScheduledTaskPathParams extends SpeakeasyBase {
    domainName: string;
    scheduledTaskId: string;
}
export declare class DeleteScheduledTaskQueryParams extends SpeakeasyBase {
    domainName: string;
    scheduledTaskId: string;
}
export declare class DeleteScheduledTaskRequest extends SpeakeasyBase {
    pathParams: DeleteScheduledTaskPathParams;
    queryParams: DeleteScheduledTaskQueryParams;
}
export declare class DeleteScheduledTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
