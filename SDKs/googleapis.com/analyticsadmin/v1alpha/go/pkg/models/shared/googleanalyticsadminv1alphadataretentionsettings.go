package shared

type GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum string

const (
	GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnumRetentionDurationUnspecified GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum = "RETENTION_DURATION_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnumTwoMonths                    GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum = "TWO_MONTHS"
	GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnumFourteenMonths               GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum = "FOURTEEN_MONTHS"
	GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnumTwentySixMonths              GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum = "TWENTY_SIX_MONTHS"
	GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnumThirtyEightMonths            GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum = "THIRTY_EIGHT_MONTHS"
	GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnumFiftyMonths                  GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum = "FIFTY_MONTHS"
)

type GoogleAnalyticsAdminV1alphaDataRetentionSettings struct {
	EventDataRetention         *GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum `json:"eventDataRetention"`
	Name                       *string                                                                 `json:"name"`
	ResetUserDataOnNewActivity *bool                                                                   `json:"resetUserDataOnNewActivity"`
}
