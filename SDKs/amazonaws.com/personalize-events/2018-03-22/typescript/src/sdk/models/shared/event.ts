import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Event
/** 
 * Represents user interaction event information sent using the <code>PutEvents</code> API.
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=eventType" })
  eventType: string;

  @Metadata({ data: "json, name=eventValue" })
  eventValue?: number;

  @Metadata({ data: "json, name=impression" })
  impression?: string[];

  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: any;

  @Metadata({ data: "json, name=recommendationId" })
  recommendationId?: string;

  @Metadata({ data: "json, name=sentAt" })
  sentAt: Date;
}
