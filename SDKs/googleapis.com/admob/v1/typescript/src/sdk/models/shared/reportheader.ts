import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateRange } from "./daterange";
import { LocalizationSettings } from "./localizationsettings";


// ReportHeader
/** 
 * Groups data helps to treat the generated report. Always sent as a first message in the stream response.
**/
export class ReportHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=localizationSettings" })
  localizationSettings?: LocalizationSettings;

  @Metadata({ data: "json, name=reportingTimeZone" })
  reportingTimeZone?: string;
}
