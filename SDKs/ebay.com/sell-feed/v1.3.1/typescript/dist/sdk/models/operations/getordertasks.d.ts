import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderTasksQueryParams extends SpeakeasyBase {
    dateRange?: string;
    feedType?: string;
    limit?: string;
    lookBackDays?: string;
    offset?: string;
    scheduleId?: string;
}
export declare class GetOrderTasksSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetOrderTasksRequest extends SpeakeasyBase {
    queryParams: GetOrderTasksQueryParams;
    security: GetOrderTasksSecurity;
}
export declare class GetOrderTasksResponse extends SpeakeasyBase {
    contentType: string;
    orderTaskCollection?: shared.OrderTaskCollection;
    statusCode: number;
}
