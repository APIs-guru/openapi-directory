import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData
/** 
 * Data specific to iOS app streams.
**/
export class GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=firebaseAppId" })
  firebaseAppId?: string;
}
