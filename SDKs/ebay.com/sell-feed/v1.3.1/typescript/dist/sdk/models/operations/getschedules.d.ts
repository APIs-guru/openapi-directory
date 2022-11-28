import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesQueryParams extends SpeakeasyBase {
    feedType: string;
    limit?: string;
    offset?: string;
}
export declare class GetSchedulesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetSchedulesRequest extends SpeakeasyBase {
    queryParams: GetSchedulesQueryParams;
    security: GetSchedulesSecurity;
}
export declare class GetSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userScheduleCollection?: shared.UserScheduleCollection;
}
