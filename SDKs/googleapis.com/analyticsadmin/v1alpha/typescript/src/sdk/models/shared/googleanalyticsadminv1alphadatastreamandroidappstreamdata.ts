import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput
/** 
 * Data specific to Android app streams.
**/
export class GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;
}


// GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData
/** 
 * Data specific to Android app streams.
**/
export class GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firebaseAppId" })
  firebaseAppId?: string;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;
}
