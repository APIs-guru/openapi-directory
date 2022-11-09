import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivityAttendee } from "./activityattendee";
import { CustomField } from "./customfield";
import { Address } from "./address";
export declare enum ActivityShowAsEnum {
    Free = "free",
    Busy = "busy"
}
export declare enum ActivityTypeEnum {
    Call = "call",
    Meeting = "meeting",
    Email = "email",
    Note = "note",
    Task = "task",
    Deadline = "deadline",
    SendLetter = "send-letter",
    SendQuote = "send-quote",
    Other = "other"
}
export declare class Activity extends SpeakeasyBase {
    accountId?: string;
    activityDate?: string;
    activityDatetime?: string;
    allDayEvent?: boolean;
    archived?: boolean;
    assetId?: string;
    attendees?: ActivityAttendee[];
    campaignId?: string;
    caseId?: string;
    child?: boolean;
    companyId?: string;
    contactId?: string;
    contractId?: string;
    createdAt?: string;
    createdBy?: string;
    customFields?: CustomField[];
    customObjectId?: string;
    deleted?: boolean;
    description?: string;
    done?: boolean;
    downstreamId?: string;
    durationMinutes?: number;
    durationSeconds?: number;
    endDate?: string;
    endDatetime?: string;
    eventSubType?: string;
    groupEvent?: boolean;
    groupEventType?: string;
    id?: string;
    leadId?: string;
    location?: string;
    locationAddress?: Address;
    note?: string;
    opportunityId?: string;
    ownerId?: string;
    private?: boolean;
    productId?: string;
    recurrent?: boolean;
    reminderDatetime?: string;
    reminderSet?: boolean;
    showAs?: ActivityShowAsEnum;
    solutionId?: string;
    startDatetime?: string;
    title?: string;
    type: ActivityTypeEnum;
    updatedAt?: string;
    updatedBy?: string;
    userId?: string;
    videoConferenceId?: string;
    videoConferenceUrl?: string;
}
