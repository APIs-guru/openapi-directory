import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateSubscriptionsBulkRequest
/** 
 * Request model for updating subscriptions
**/
export class UpdateSubscriptionsBulkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isSubscribed" })
  isSubscribed: boolean;

  @SpeakeasyMetadata({ data: "json, name=objectIds" })
  objectIds: number[];
}
