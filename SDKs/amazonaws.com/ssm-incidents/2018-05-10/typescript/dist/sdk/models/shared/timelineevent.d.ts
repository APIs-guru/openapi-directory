import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A significant event that happened during the incident.
**/
export declare class TimelineEvent extends SpeakeasyBase {
    eventData: string;
    eventId: string;
    eventTime: Date;
    eventType: string;
    eventUpdatedTime: Date;
    incidentRecordArn: string;
}
