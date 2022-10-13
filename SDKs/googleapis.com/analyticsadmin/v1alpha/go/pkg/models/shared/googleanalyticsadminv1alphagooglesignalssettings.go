package shared

type GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum string

const (
	GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnumGoogleSignalsConsentUnspecified  GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum = "GOOGLE_SIGNALS_CONSENT_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnumGoogleSignalsConsentConsented    GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum = "GOOGLE_SIGNALS_CONSENT_CONSENTED"
	GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnumGoogleSignalsConsentNotConsented GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum = "GOOGLE_SIGNALS_CONSENT_NOT_CONSENTED"
)

type GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum string

const (
	GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnumGoogleSignalsStateUnspecified GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum = "GOOGLE_SIGNALS_STATE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnumGoogleSignalsEnabled          GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum = "GOOGLE_SIGNALS_ENABLED"
	GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnumGoogleSignalsDisabled         GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum = "GOOGLE_SIGNALS_DISABLED"
)

type GoogleAnalyticsAdminV1alphaGoogleSignalsSettings struct {
	Consent *GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum `json:"consent"`
	Name    *string                                                      `json:"name"`
	State   *GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum   `json:"state"`
}
