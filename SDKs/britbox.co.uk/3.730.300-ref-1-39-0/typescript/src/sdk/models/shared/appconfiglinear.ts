import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppConfigLinear extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scheduleCacheMaxAgeMinutes" })
  scheduleCacheMaxAgeMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=viewingWindowDaysAfter" })
  viewingWindowDaysAfter?: number;

  @SpeakeasyMetadata({ data: "json, name=viewingWindowDaysBefore" })
  viewingWindowDaysBefore?: number;
}
