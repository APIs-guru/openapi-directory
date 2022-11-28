import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaConversionEvent } from "./googleanalyticsadminv1alphaconversionevent";



// GoogleAnalyticsAdminV1alphaListConversionEventsResponse
/** 
 * Response message for ListConversionEvents RPC.
**/
export class GoogleAnalyticsAdminV1alphaListConversionEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversionEvents", elemType: GoogleAnalyticsAdminV1alphaConversionEvent })
  conversionEvents?: GoogleAnalyticsAdminV1alphaConversionEvent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
