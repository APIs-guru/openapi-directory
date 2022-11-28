import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum {
    RetentionDurationUnspecified = "RETENTION_DURATION_UNSPECIFIED",
    TwoMonths = "TWO_MONTHS",
    FourteenMonths = "FOURTEEN_MONTHS",
    TwentySixMonths = "TWENTY_SIX_MONTHS",
    ThirtyEightMonths = "THIRTY_EIGHT_MONTHS",
    FiftyMonths = "FIFTY_MONTHS"
}


// GoogleAnalyticsAdminV1alphaDataRetentionSettings
/** 
 * Settings values for data retention. This is a singleton resource.
**/
export class GoogleAnalyticsAdminV1alphaDataRetentionSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventDataRetention" })
  eventDataRetention?: GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resetUserDataOnNewActivity" })
  resetUserDataOnNewActivity?: boolean;
}
