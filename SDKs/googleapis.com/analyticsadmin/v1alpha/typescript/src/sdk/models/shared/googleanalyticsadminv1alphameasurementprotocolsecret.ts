import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret
/** 
 * A secret value used for sending hits to Measurement Protocol.
**/
export class GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=secretValue" })
  secretValue?: string;
}
