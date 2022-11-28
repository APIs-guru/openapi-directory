import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSchedulePathParams extends SpeakeasyBase {
    scheduleId: string;
}
export declare class DeleteScheduleSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class DeleteScheduleRequest extends SpeakeasyBase {
    pathParams: DeleteSchedulePathParams;
    security: DeleteScheduleSecurity;
}
export declare class DeleteScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
