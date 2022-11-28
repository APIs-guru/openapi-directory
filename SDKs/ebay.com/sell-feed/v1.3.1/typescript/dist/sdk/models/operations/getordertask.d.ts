import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetOrderTaskSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetOrderTaskRequest extends SpeakeasyBase {
    pathParams: GetOrderTaskPathParams;
    security: GetOrderTaskSecurity;
}
export declare class GetOrderTaskResponse extends SpeakeasyBase {
    contentType: string;
    orderTask?: shared.OrderTask;
    statusCode: number;
}
