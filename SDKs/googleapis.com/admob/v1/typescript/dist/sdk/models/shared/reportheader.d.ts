import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
import { LocalizationSettings } from "./localizationsettings";
/**
 * Groups data helps to treat the generated report. Always sent as a first message in the stream response.
**/
export declare class ReportHeader extends SpeakeasyBase {
    dateRange?: DateRange;
    localizationSettings?: LocalizationSettings;
    reportingTimeZone?: string;
}
