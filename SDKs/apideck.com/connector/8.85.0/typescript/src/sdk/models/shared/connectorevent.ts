import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectorEvent
/** 
 * Unify event that is supported on the connector. Events are delivered via Webhooks.
**/
export class ConnectorEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downstream_event_type" })
  downstreamEventType?: string;

  @SpeakeasyMetadata({ data: "json, name=event_type" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}
