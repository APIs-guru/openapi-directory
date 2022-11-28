import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthGetQueueTasksSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class HealthGetQueueTasksRequest extends SpeakeasyBase {
    security: HealthGetQueueTasksSecurity;
}
export declare class HealthGetQueueTasksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
