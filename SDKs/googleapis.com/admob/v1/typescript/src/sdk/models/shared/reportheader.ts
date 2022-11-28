import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
import { LocalizationSettings } from "./localizationsettings";



// ReportHeader
/** 
 * Groups data helps to treat the generated report. Always sent as a first message in the stream response.
**/
export class ReportHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=localizationSettings" })
  localizationSettings?: LocalizationSettings;

  @SpeakeasyMetadata({ data: "json, name=reportingTimeZone" })
  reportingTimeZone?: string;
}
