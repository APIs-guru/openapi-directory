import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unify event that is supported on the connector. Events are delivered via Webhooks.
**/
export declare class ConnectorEvent extends SpeakeasyBase {
    downstreamEventType?: string;
    eventType?: string;
    resource?: string;
}
