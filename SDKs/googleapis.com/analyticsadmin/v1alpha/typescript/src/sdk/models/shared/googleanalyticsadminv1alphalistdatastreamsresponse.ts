import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaDataStream } from "./googleanalyticsadminv1alphadatastream";



// GoogleAnalyticsAdminV1alphaListDataStreamsResponse
/** 
 * Response message for ListDataStreams RPC.
**/
export class GoogleAnalyticsAdminV1alphaListDataStreamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataStreams", elemType: GoogleAnalyticsAdminV1alphaDataStream })
  dataStreams?: GoogleAnalyticsAdminV1alphaDataStream[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
