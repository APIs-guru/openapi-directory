import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaDataStreamWebStreamData
/** 
 * Data specific to web streams.
**/
export class GoogleAnalyticsAdminV1alphaDataStreamWebStreamData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultUri" })
  defaultUri?: string;

  @SpeakeasyMetadata({ data: "json, name=firebaseAppId" })
  firebaseAppId?: string;

  @SpeakeasyMetadata({ data: "json, name=measurementId" })
  measurementId?: string;
}


// GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput
/** 
 * Data specific to web streams.
**/
export class GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultUri" })
  defaultUri?: string;
}
