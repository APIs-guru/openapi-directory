import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppUpdateEvent
/** 
 * An event generated when a new version of an app is uploaded to Google Play. Notifications are sent for new public versions only: alpha, beta, or canary versions do not generate this event. To fetch up-to-date version history for an app, use Products.Get on the EMM API.
**/
export class AppUpdateEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}
