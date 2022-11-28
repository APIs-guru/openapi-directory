import { SpeakeasyBase } from "../../../internal/utils";
import { InboxRegistrationEntity } from "./inboxregistrationentity";
/**
 * List Inbox Uploads
**/
export declare class InboxUploadEntity extends SpeakeasyBase {
    createdAt?: Date;
    inboxRegistration?: InboxRegistrationEntity;
    path?: string;
}
