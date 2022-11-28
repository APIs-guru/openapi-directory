import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum {
    GoogleSignalsConsentUnspecified = "GOOGLE_SIGNALS_CONSENT_UNSPECIFIED",
    GoogleSignalsConsentConsented = "GOOGLE_SIGNALS_CONSENT_CONSENTED",
    GoogleSignalsConsentNotConsented = "GOOGLE_SIGNALS_CONSENT_NOT_CONSENTED"
}

export enum GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum {
    GoogleSignalsStateUnspecified = "GOOGLE_SIGNALS_STATE_UNSPECIFIED",
    GoogleSignalsEnabled = "GOOGLE_SIGNALS_ENABLED",
    GoogleSignalsDisabled = "GOOGLE_SIGNALS_DISABLED"
}


// GoogleAnalyticsAdminV1alphaGoogleSignalsSettings
/** 
 * Settings values for Google Signals. This is a singleton resource.
**/
export class GoogleAnalyticsAdminV1alphaGoogleSignalsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consent" })
  consent?: GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum;
}
