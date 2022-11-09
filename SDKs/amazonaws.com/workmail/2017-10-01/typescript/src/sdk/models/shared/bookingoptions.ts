import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BookingOptions
/** 
 * At least one delegate must be associated to the resource to disable automatic replies from the resource.
**/
export class BookingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoAcceptRequests" })
  autoAcceptRequests?: boolean;

  @Metadata({ data: "json, name=AutoDeclineConflictingRequests" })
  autoDeclineConflictingRequests?: boolean;

  @Metadata({ data: "json, name=AutoDeclineRecurringRequests" })
  autoDeclineRecurringRequests?: boolean;
}
