import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulePathParams extends SpeakeasyBase {
    scheduleId: string;
}
export declare class GetScheduleSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetScheduleRequest extends SpeakeasyBase {
    pathParams: GetSchedulePathParams;
    security: GetScheduleSecurity;
}
export declare class GetScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userScheduleResponse?: shared.UserScheduleResponse;
}
