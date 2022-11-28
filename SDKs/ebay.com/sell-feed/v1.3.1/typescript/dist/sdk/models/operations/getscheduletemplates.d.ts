import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScheduleTemplatesQueryParams extends SpeakeasyBase {
    feedType: string;
    limit?: string;
    offset?: string;
}
export declare class GetScheduleTemplatesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetScheduleTemplatesRequest extends SpeakeasyBase {
    queryParams: GetScheduleTemplatesQueryParams;
    security: GetScheduleTemplatesSecurity;
}
export declare class GetScheduleTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    scheduleTemplateCollection?: shared.ScheduleTemplateCollection;
    statusCode: number;
}
