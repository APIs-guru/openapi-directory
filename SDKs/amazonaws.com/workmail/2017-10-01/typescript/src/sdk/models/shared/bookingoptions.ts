import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BookingOptions
/** 
 * At least one delegate must be associated to the resource to disable automatic replies from the resource.
**/
export class BookingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoAcceptRequests" })
  autoAcceptRequests?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoDeclineConflictingRequests" })
  autoDeclineConflictingRequests?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoDeclineRecurringRequests" })
  autoDeclineRecurringRequests?: boolean;
}
