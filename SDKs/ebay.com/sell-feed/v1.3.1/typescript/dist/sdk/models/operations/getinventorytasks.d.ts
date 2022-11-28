import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInventoryTasksQueryParams extends SpeakeasyBase {
    dateRange?: string;
    feedType?: string;
    limit?: string;
    lookBackDays?: string;
    offset?: string;
    scheduleId?: string;
}
export declare class GetInventoryTasksSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetInventoryTasksRequest extends SpeakeasyBase {
    queryParams: GetInventoryTasksQueryParams;
    security: GetInventoryTasksSecurity;
}
export declare class GetInventoryTasksResponse extends SpeakeasyBase {
    contentType: string;
    inventoryTaskCollection?: shared.InventoryTaskCollection;
    statusCode: number;
}
