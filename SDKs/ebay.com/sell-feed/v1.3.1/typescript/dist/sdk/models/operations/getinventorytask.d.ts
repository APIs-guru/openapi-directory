import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInventoryTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetInventoryTaskSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetInventoryTaskRequest extends SpeakeasyBase {
    pathParams: GetInventoryTaskPathParams;
    security: GetInventoryTaskSecurity;
}
export declare class GetInventoryTaskResponse extends SpeakeasyBase {
    contentType: string;
    inventoryTask?: shared.InventoryTask;
    statusCode: number;
}
