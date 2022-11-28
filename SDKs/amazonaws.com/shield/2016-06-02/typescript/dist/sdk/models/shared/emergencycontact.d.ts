import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contact information that the SRT can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
**/
export declare class EmergencyContact extends SpeakeasyBase {
    contactNotes?: string;
    emailAddress: string;
    phoneNumber?: string;
}
