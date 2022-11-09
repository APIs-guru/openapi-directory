import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaCustomDimension } from "./googleanalyticsadminv1alphacustomdimension";


// GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse
/** 
 * Response message for ListCustomDimensions RPC.
**/
export class GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customDimensions", elemType: shared.GoogleAnalyticsAdminV1alphaCustomDimension })
  customDimensions?: GoogleAnalyticsAdminV1alphaCustomDimension[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
