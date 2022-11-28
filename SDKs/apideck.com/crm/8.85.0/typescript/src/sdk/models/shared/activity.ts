import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityAttendee } from "./activityattendee";
import { CustomField } from "./customfield";
import { Address } from "./address";
import { ActivityAttendeeInput } from "./activityattendee";


export enum ActivityShowAsEnum {
    Free = "free",
    Busy = "busy"
}

export enum ActivityTypeEnum {
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


export class Activity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=activity_date" })
  activityDate?: string;

  @SpeakeasyMetadata({ data: "json, name=activity_datetime" })
  activityDatetime?: string;

  @SpeakeasyMetadata({ data: "json, name=all_day_event" })
  allDayEvent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=asset_id" })
  assetId?: string;

  @SpeakeasyMetadata({ data: "json, name=attendees", elemType: ActivityAttendee })
  attendees?: ActivityAttendee[];

  @SpeakeasyMetadata({ data: "json, name=campaign_id" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=case_id" })
  caseId?: string;

  @SpeakeasyMetadata({ data: "json, name=child" })
  child?: boolean;

  @SpeakeasyMetadata({ data: "json, name=company_id" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_id" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "json, name=contract_id" })
  contractId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField })
  customFields?: CustomField[];

  @SpeakeasyMetadata({ data: "json, name=custom_object_id" })
  customObjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=done" })
  done?: boolean;

  @SpeakeasyMetadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=duration_minutes" })
  durationMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=duration_seconds" })
  durationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=end_datetime" })
  endDatetime?: string;

  @SpeakeasyMetadata({ data: "json, name=event_sub_type" })
  eventSubType?: string;

  @SpeakeasyMetadata({ data: "json, name=group_event" })
  groupEvent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=group_event_type" })
  groupEventType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lead_id" })
  leadId?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=location_address" })
  locationAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=opportunity_id" })
  opportunityId?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=private" })
  private?: boolean;

  @SpeakeasyMetadata({ data: "json, name=product_id" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=recurrent" })
  recurrent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reminder_datetime" })
  reminderDatetime?: string;

  @SpeakeasyMetadata({ data: "json, name=reminder_set" })
  reminderSet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_as" })
  showAs?: ActivityShowAsEnum;

  @SpeakeasyMetadata({ data: "json, name=solution_id" })
  solutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=start_datetime" })
  startDatetime?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ActivityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=video_conference_id" })
  videoConferenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=video_conference_url" })
  videoConferenceUrl?: string;
}


export class ActivityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=activity_date" })
  activityDate?: string;

  @SpeakeasyMetadata({ data: "json, name=activity_datetime" })
  activityDatetime?: string;

  @SpeakeasyMetadata({ data: "json, name=all_day_event" })
  allDayEvent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=asset_id" })
  assetId?: string;

  @SpeakeasyMetadata({ data: "json, name=attendees", elemType: ActivityAttendeeInput })
  attendees?: ActivityAttendeeInput[];

  @SpeakeasyMetadata({ data: "json, name=campaign_id" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=case_id" })
  caseId?: string;

  @SpeakeasyMetadata({ data: "json, name=child" })
  child?: boolean;

  @SpeakeasyMetadata({ data: "json, name=company_id" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_id" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "json, name=contract_id" })
  contractId?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField })
  customFields?: CustomField[];

  @SpeakeasyMetadata({ data: "json, name=custom_object_id" })
  customObjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=done" })
  done?: boolean;

  @SpeakeasyMetadata({ data: "json, name=duration_seconds" })
  durationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=end_datetime" })
  endDatetime?: string;

  @SpeakeasyMetadata({ data: "json, name=event_sub_type" })
  eventSubType?: string;

  @SpeakeasyMetadata({ data: "json, name=group_event" })
  groupEvent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=group_event_type" })
  groupEventType?: string;

  @SpeakeasyMetadata({ data: "json, name=lead_id" })
  leadId?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=location_address" })
  locationAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=opportunity_id" })
  opportunityId?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=private" })
  private?: boolean;

  @SpeakeasyMetadata({ data: "json, name=product_id" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=recurrent" })
  recurrent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reminder_datetime" })
  reminderDatetime?: string;

  @SpeakeasyMetadata({ data: "json, name=reminder_set" })
  reminderSet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_as" })
  showAs?: ActivityShowAsEnum;

  @SpeakeasyMetadata({ data: "json, name=solution_id" })
  solutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=start_datetime" })
  startDatetime?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ActivityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=video_conference_id" })
  videoConferenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=video_conference_url" })
  videoConferenceUrl?: string;
}
