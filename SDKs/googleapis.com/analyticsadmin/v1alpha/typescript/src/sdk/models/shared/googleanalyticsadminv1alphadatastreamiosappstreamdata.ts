import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput
/** 
 * Data specific to iOS app streams.
**/
export class GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;
}


// GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData
/** 
 * Data specific to iOS app streams.
**/
export class GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=firebaseAppId" })
  firebaseAppId?: string;
}
