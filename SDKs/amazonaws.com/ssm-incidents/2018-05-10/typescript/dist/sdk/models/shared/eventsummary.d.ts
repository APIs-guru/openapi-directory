import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Details about a timeline event during an incident.
**/
export declare class EventSummary extends SpeakeasyBase {
    eventId: string;
    eventTime: Date;
    eventType: string;
    eventUpdatedTime: Date;
    incidentRecordArn: string;
}
