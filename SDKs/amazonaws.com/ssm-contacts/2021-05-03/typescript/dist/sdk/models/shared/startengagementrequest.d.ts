import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StartEngagementRequest extends SpeakeasyBase {
    contactId: string;
    content: string;
    idempotencyToken?: string;
    incidentId?: string;
    publicContent?: string;
    publicSubject?: string;
    sender: string;
    subject: string;
}
