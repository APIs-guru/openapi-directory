import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ActivityAttendeeStatusEnum {
    Accepted = "accepted"
,    Tentative = "tentative"
,    Declined = "declined"
}


export class ActivityAttendee extends SpeakeasyBase {
  @Metadata({ data: "json, name=contact_id" })
  contactId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_organizer" })
  isOrganizer?: boolean;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=middle_name" })
  middleName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=status" })
  status?: ActivityAttendeeStatusEnum;

  @Metadata({ data: "json, name=suffix" })
  suffix?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;
}
