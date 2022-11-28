import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum {
    GoogleSignalsConsentUnspecified = "GOOGLE_SIGNALS_CONSENT_UNSPECIFIED",
    GoogleSignalsConsentConsented = "GOOGLE_SIGNALS_CONSENT_CONSENTED",
    GoogleSignalsConsentNotConsented = "GOOGLE_SIGNALS_CONSENT_NOT_CONSENTED"
}
export declare enum GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum {
    GoogleSignalsStateUnspecified = "GOOGLE_SIGNALS_STATE_UNSPECIFIED",
    GoogleSignalsEnabled = "GOOGLE_SIGNALS_ENABLED",
    GoogleSignalsDisabled = "GOOGLE_SIGNALS_DISABLED"
}
/**
 * Settings values for Google Signals. This is a singleton resource.
**/
export declare class GoogleAnalyticsAdminV1alphaGoogleSignalsSettings extends SpeakeasyBase {
    consent?: GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum;
    name?: string;
    state?: GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum;
}
