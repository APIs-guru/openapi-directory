import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppUpdateEvent
/** 
 * An event generated when a new version of an app is uploaded to Google Play. Notifications are sent for new public versions only: alpha, beta, or canary versions do not generate this event. To fetch up-to-date version history for an app, use Products.Get on the EMM API.
**/
export class AppUpdateEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=productId" })
  productId?: string;
}
