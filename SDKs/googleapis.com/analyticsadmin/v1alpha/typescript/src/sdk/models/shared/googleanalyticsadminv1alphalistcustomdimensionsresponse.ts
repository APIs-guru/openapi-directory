import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaCustomDimension } from "./googleanalyticsadminv1alphacustomdimension";



// GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse
/** 
 * Response message for ListCustomDimensions RPC.
**/
export class GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customDimensions", elemType: GoogleAnalyticsAdminV1alphaCustomDimension })
  customDimensions?: GoogleAnalyticsAdminV1alphaCustomDimension[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
