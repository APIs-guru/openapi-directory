import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData
/** 
 * Data specific to Android app streams.
**/
export class GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData extends SpeakeasyBase {
  @Metadata({ data: "json, name=firebaseAppId" })
  firebaseAppId?: string;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;
}
