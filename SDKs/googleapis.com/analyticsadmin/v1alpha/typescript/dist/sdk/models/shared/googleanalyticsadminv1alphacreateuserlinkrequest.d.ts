import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaUserLinkInput } from "./googleanalyticsadminv1alphauserlink";
/**
 * Request message for CreateUserLink RPC. Users can have multiple email addresses associated with their Google account, and one of these email addresses is the "primary" email address. Any of the email addresses associated with a Google account may be used for a new UserLink, but the returned UserLink will always contain the "primary" email address. As a result, the input and output email address for this request may differ.
**/
export declare class GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput extends SpeakeasyBase {
    notifyNewUser?: boolean;
    parent?: string;
    userLink?: GoogleAnalyticsAdminV1alphaUserLinkInput;
}
