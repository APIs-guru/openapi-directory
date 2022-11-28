import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateScheduleSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateScheduleRequest extends SpeakeasyBase {
    request: shared.CreateUserScheduleRequest;
    security: CreateScheduleSecurity;
}
export declare class CreateScheduleResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    createSchedule201ApplicationJsonObject?: Map<string, any>;
}
