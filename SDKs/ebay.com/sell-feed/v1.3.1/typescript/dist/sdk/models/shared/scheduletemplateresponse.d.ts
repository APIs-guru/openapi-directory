import { SpeakeasyBase } from "../../../internal/utils";
import { SupportedConfiguration } from "./supportedconfiguration";
/**
 * The type that defines the fields for a paginated result set of available schedule templates. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export declare class ScheduleTemplateResponse extends SpeakeasyBase {
    feedType?: string;
    frequency?: string;
    name?: string;
    scheduleTemplateId?: string;
    status?: string;
    supportedConfigurations?: SupportedConfiguration[];
}
