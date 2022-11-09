import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppConfigLinear extends SpeakeasyBase {
  @Metadata({ data: "json, name=scheduleCacheMaxAgeMinutes" })
  scheduleCacheMaxAgeMinutes?: number;

  @Metadata({ data: "json, name=viewingWindowDaysAfter" })
  viewingWindowDaysAfter?: number;

  @Metadata({ data: "json, name=viewingWindowDaysBefore" })
  viewingWindowDaysBefore?: number;
}
