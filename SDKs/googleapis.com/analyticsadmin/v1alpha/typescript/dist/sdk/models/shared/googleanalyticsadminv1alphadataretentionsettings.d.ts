import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum {
    RetentionDurationUnspecified = "RETENTION_DURATION_UNSPECIFIED",
    TwoMonths = "TWO_MONTHS",
    FourteenMonths = "FOURTEEN_MONTHS",
    TwentySixMonths = "TWENTY_SIX_MONTHS",
    ThirtyEightMonths = "THIRTY_EIGHT_MONTHS",
    FiftyMonths = "FIFTY_MONTHS"
}
/**
 * Settings values for data retention. This is a singleton resource.
**/
export declare class GoogleAnalyticsAdminV1alphaDataRetentionSettings extends SpeakeasyBase {
    eventDataRetention?: GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum;
    name?: string;
    resetUserDataOnNewActivity?: boolean;
}
