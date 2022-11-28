import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ActivityAttendeeStatusEnum {
    Accepted = "accepted",
    Tentative = "tentative",
    Declined = "declined"
}
export declare class ActivityAttendeeInput extends SpeakeasyBase {
    emailAddress?: string;
    firstName?: string;
    isOrganizer?: boolean;
    lastName?: string;
    middleName?: string;
    name?: string;
    prefix?: string;
    status?: ActivityAttendeeStatusEnum;
    suffix?: string;
}
export declare class ActivityAttendee extends SpeakeasyBase {
    contactId?: string;
    createdAt?: Date;
    emailAddress?: string;
    firstName?: string;
    id?: string;
    isOrganizer?: boolean;
    lastName?: string;
    middleName?: string;
    name?: string;
    prefix?: string;
    status?: ActivityAttendeeStatusEnum;
    suffix?: string;
    updatedAt?: Date;
    userId?: string;
}
