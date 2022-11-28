import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Incident Manager reaching out to a contact or escalation plan to engage contact during an incident.
**/
export declare class Engagement extends SpeakeasyBase {
    contactArn: string;
    engagementArn: string;
    incidentId?: string;
    sender: string;
    startTime?: Date;
    stopTime?: Date;
}
