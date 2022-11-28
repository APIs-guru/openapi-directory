import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ActivityAttendeeStatusEnum {
    Accepted = "accepted",
    Tentative = "tentative",
    Declined = "declined"
}


export class ActivityAttendeeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=is_organizer" })
  isOrganizer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ActivityAttendeeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;
}


export class ActivityAttendee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contact_id" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_organizer" })
  isOrganizer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ActivityAttendeeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}
