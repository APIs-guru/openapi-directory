import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaDataStream } from "./googleanalyticsadminv1alphadatastream";


// GoogleAnalyticsAdminV1alphaListDataStreamsResponse
/** 
 * Response message for ListDataStreams RPC.
**/
export class GoogleAnalyticsAdminV1alphaListDataStreamsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataStreams", elemType: shared.GoogleAnalyticsAdminV1alphaDataStream })
  dataStreams?: GoogleAnalyticsAdminV1alphaDataStream[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
