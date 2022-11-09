import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaUserLink } from "./googleanalyticsadminv1alphauserlink";


// GoogleAnalyticsAdminV1alphaCreateUserLinkRequest
/** 
 * Request message for CreateUserLink RPC. Users can have multiple email addresses associated with their Google account, and one of these email addresses is the "primary" email address. Any of the email addresses associated with a Google account may be used for a new UserLink, but the returned UserLink will always contain the "primary" email address. As a result, the input and output email address for this request may differ.
**/
export class GoogleAnalyticsAdminV1alphaCreateUserLinkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=notifyNewUser" })
  notifyNewUser?: boolean;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=userLink" })
  userLink?: GoogleAnalyticsAdminV1alphaUserLink;
}
