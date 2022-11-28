import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSchedulePathParams extends SpeakeasyBase {
    scheduleId: string;
}
export declare class UpdateScheduleSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class UpdateScheduleRequest extends SpeakeasyBase {
    pathParams: UpdateSchedulePathParams;
    request: shared.UpdateUserScheduleRequest;
    security: UpdateScheduleSecurity;
}
export declare class UpdateScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
