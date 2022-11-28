import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput } from "./googleanalyticsadminv1alphacreateuserlinkrequest";
/**
 * Request message for BatchCreateUserLinks RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput extends SpeakeasyBase {
    notifyNewUsers?: boolean;
    requests?: GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput[];
}
