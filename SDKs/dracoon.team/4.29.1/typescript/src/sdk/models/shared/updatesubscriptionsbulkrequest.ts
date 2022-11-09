import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateSubscriptionsBulkRequest
/** 
 * Request model for updating subscriptions
**/
export class UpdateSubscriptionsBulkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=isSubscribed" })
  isSubscribed: boolean;

  @Metadata({ data: "json, name=objectIds" })
  objectIds: number[];
}
