import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaCustomDimension } from "./googleanalyticsadminv1alphacustomdimension";
/**
 * Response message for ListCustomDimensions RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse extends SpeakeasyBase {
    customDimensions?: GoogleAnalyticsAdminV1alphaCustomDimension[];
    nextPageToken?: string;
}
