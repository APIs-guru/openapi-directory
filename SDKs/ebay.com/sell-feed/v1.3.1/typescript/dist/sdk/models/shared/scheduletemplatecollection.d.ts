import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduleTemplateResponse } from "./scheduletemplateresponse";
/**
 * The type that defines the fields for a paginated result set of schedule templates. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export declare class ScheduleTemplateCollection extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    scheduleTemplates?: ScheduleTemplateResponse[];
    total?: number;
}
