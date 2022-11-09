import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaDataStreamWebStreamData
/** 
 * Data specific to web streams.
**/
export class GoogleAnalyticsAdminV1alphaDataStreamWebStreamData extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultUri" })
  defaultUri?: string;

  @Metadata({ data: "json, name=firebaseAppId" })
  firebaseAppId?: string;

  @Metadata({ data: "json, name=measurementId" })
  measurementId?: string;
}
