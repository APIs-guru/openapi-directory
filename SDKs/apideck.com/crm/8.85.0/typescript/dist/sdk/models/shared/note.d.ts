import { SpeakeasyBase } from "../../../internal/utils";
export declare class Note extends SpeakeasyBase {
    active?: boolean;
    companyId?: string;
    contactId?: string;
    content?: string;
    createdAt?: string;
    createdBy?: string;
    id?: string;
    leadId?: string;
    opportunityId?: string;
    ownerId?: string;
    title?: string;
    updatedAt?: string;
    updatedBy?: string;
}
export declare class NoteInput extends SpeakeasyBase {
    active?: boolean;
    companyId?: string;
    contactId?: string;
    content?: string;
    leadId?: string;
    opportunityId?: string;
    ownerId?: string;
    title?: string;
}
