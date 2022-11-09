import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum {
    RetentionDurationUnspecified = "RETENTION_DURATION_UNSPECIFIED"
,    TwoMonths = "TWO_MONTHS"
,    FourteenMonths = "FOURTEEN_MONTHS"
,    TwentySixMonths = "TWENTY_SIX_MONTHS"
,    ThirtyEightMonths = "THIRTY_EIGHT_MONTHS"
,    FiftyMonths = "FIFTY_MONTHS"
}


// GoogleAnalyticsAdminV1alphaDataRetentionSettings
/** 
 * Settings values for data retention. This is a singleton resource.
**/
export class GoogleAnalyticsAdminV1alphaDataRetentionSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventDataRetention" })
  eventDataRetention?: GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resetUserDataOnNewActivity" })
  resetUserDataOnNewActivity?: boolean;
}
