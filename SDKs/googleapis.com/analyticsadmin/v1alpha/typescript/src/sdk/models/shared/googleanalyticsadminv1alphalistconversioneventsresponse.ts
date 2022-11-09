import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaConversionEvent } from "./googleanalyticsadminv1alphaconversionevent";


// GoogleAnalyticsAdminV1alphaListConversionEventsResponse
/** 
 * Response message for ListConversionEvents RPC.
**/
export class GoogleAnalyticsAdminV1alphaListConversionEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversionEvents", elemType: shared.GoogleAnalyticsAdminV1alphaConversionEvent })
  conversionEvents?: GoogleAnalyticsAdminV1alphaConversionEvent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
