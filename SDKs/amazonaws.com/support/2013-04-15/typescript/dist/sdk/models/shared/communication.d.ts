import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentDetails } from "./attachmentdetails";
/**
 * A communication associated with a support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication.
**/
export declare class Communication extends SpeakeasyBase {
    attachmentSet?: AttachmentDetails[];
    body?: string;
    caseId?: string;
    submittedBy?: string;
    timeCreated?: string;
}
