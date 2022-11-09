import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActivityAttendee } from "./activityattendee";
import { CustomField } from "./customfield";
import { Address } from "./address";

export enum ActivityShowAsEnum {
    Free = "free"
,    Busy = "busy"
}

export enum ActivityTypeEnum {
    Call = "call"
,    Meeting = "meeting"
,    Email = "email"
,    Note = "note"
,    Task = "task"
,    Deadline = "deadline"
,    SendLetter = "send-letter"
,    SendQuote = "send-quote"
,    Other = "other"
}


export class Activity extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: string;

  @Metadata({ data: "json, name=activity_date" })
  activityDate?: string;

  @Metadata({ data: "json, name=activity_datetime" })
  activityDatetime?: string;

  @Metadata({ data: "json, name=all_day_event" })
  allDayEvent?: boolean;

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=asset_id" })
  assetId?: string;

  @Metadata({ data: "json, name=attendees", elemType: shared.ActivityAttendee })
  attendees?: ActivityAttendee[];

  @Metadata({ data: "json, name=campaign_id" })
  campaignId?: string;

  @Metadata({ data: "json, name=case_id" })
  caseId?: string;

  @Metadata({ data: "json, name=child" })
  child?: boolean;

  @Metadata({ data: "json, name=company_id" })
  companyId?: string;

  @Metadata({ data: "json, name=contact_id" })
  contactId?: string;

  @Metadata({ data: "json, name=contract_id" })
  contractId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=custom_fields", elemType: shared.CustomField })
  customFields?: CustomField[];

  @Metadata({ data: "json, name=custom_object_id" })
  customObjectId?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=done" })
  done?: boolean;

  @Metadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @Metadata({ data: "json, name=duration_minutes" })
  durationMinutes?: number;

  @Metadata({ data: "json, name=duration_seconds" })
  durationSeconds?: number;

  @Metadata({ data: "json, name=end_date" })
  endDate?: string;

  @Metadata({ data: "json, name=end_datetime" })
  endDatetime?: string;

  @Metadata({ data: "json, name=event_sub_type" })
  eventSubType?: string;

  @Metadata({ data: "json, name=group_event" })
  groupEvent?: boolean;

  @Metadata({ data: "json, name=group_event_type" })
  groupEventType?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lead_id" })
  leadId?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=location_address" })
  locationAddress?: Address;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=opportunity_id" })
  opportunityId?: string;

  @Metadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @Metadata({ data: "json, name=private" })
  private?: boolean;

  @Metadata({ data: "json, name=product_id" })
  productId?: string;

  @Metadata({ data: "json, name=recurrent" })
  recurrent?: boolean;

  @Metadata({ data: "json, name=reminder_datetime" })
  reminderDatetime?: string;

  @Metadata({ data: "json, name=reminder_set" })
  reminderSet?: boolean;

  @Metadata({ data: "json, name=show_as" })
  showAs?: ActivityShowAsEnum;

  @Metadata({ data: "json, name=solution_id" })
  solutionId?: string;

  @Metadata({ data: "json, name=start_datetime" })
  startDatetime?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type: ActivityTypeEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;

  @Metadata({ data: "json, name=video_conference_id" })
  videoConferenceId?: string;

  @Metadata({ data: "json, name=video_conference_url" })
  videoConferenceUrl?: string;
}
