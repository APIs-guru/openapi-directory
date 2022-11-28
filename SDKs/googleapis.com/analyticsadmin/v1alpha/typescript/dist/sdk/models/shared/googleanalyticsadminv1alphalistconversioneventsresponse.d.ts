import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaConversionEvent } from "./googleanalyticsadminv1alphaconversionevent";
/**
 * Response message for ListConversionEvents RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaListConversionEventsResponse extends SpeakeasyBase {
    conversionEvents?: GoogleAnalyticsAdminV1alphaConversionEvent[];
    nextPageToken?: string;
}
