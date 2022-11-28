import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Event
/** 
 * Represents user interaction event information sent using the <code>PutEvents</code> API.
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType: string;

  @SpeakeasyMetadata({ data: "json, name=eventValue" })
  eventValue?: number;

  @SpeakeasyMetadata({ data: "json, name=impression" })
  impression?: string[];

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: any;

  @SpeakeasyMetadata({ data: "json, name=recommendationId" })
  recommendationId?: string;

  @SpeakeasyMetadata({ data: "json, name=sentAt" })
  sentAt: Date;
}
