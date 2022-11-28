import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScheduleTemplatePathParams extends SpeakeasyBase {
    scheduleTemplateId: string;
}
export declare class GetScheduleTemplateSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetScheduleTemplateRequest extends SpeakeasyBase {
    pathParams: GetScheduleTemplatePathParams;
    security: GetScheduleTemplateSecurity;
}
export declare class GetScheduleTemplateResponse extends SpeakeasyBase {
    contentType: string;
    scheduleTemplateResponse?: shared.ScheduleTemplateResponse;
    statusCode: number;
}
