import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaDataStream } from "./googleanalyticsadminv1alphadatastream";
/**
 * Response message for ListDataStreams RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaListDataStreamsResponse extends SpeakeasyBase {
    dataStreams?: GoogleAnalyticsAdminV1alphaDataStream[];
    nextPageToken?: string;
}
