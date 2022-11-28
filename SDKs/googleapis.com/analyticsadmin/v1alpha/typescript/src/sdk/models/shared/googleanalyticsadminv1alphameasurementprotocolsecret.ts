import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretInput
/** 
 * A secret value used for sending hits to Measurement Protocol.
**/
export class GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}


// GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret
/** 
 * A secret value used for sending hits to Measurement Protocol.
**/
export class GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=secretValue" })
  secretValue?: string;
}
