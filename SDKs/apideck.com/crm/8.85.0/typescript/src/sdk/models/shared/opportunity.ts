import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { CustomField } from "./customfield";



export class OpportunityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=close_date" })
  closeDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=company_id" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_id" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField })
  customFields?: CustomField[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lead_id" })
  leadId?: string;

  @SpeakeasyMetadata({ data: "json, name=lead_source" })
  leadSource?: string;

  @SpeakeasyMetadata({ data: "json, name=loss_reason" })
  lossReason?: string;

  @SpeakeasyMetadata({ data: "json, name=loss_reason_id" })
  lossReasonId?: string;

  @SpeakeasyMetadata({ data: "json, name=monetary_amount" })
  monetaryAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=pipeline_id" })
  pipelineId?: string;

  @SpeakeasyMetadata({ data: "json, name=pipeline_stage_id" })
  pipelineStageId?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_contact_id" })
  primaryContactId: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=stage_last_changed_at" })
  stageLastChangedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=status_id" })
  statusId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=win_probability" })
  winProbability?: number;

  @SpeakeasyMetadata({ data: "json, name=won_reason" })
  wonReason?: string;

  @SpeakeasyMetadata({ data: "json, name=won_reason_id" })
  wonReasonId?: string;
}


export class Opportunity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=close_date" })
  closeDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=company_id" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_id" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField })
  customFields?: CustomField[];

  @SpeakeasyMetadata({ data: "json, name=date_last_contacted" })
  dateLastContacted?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_lead_created" })
  dateLeadCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_stage_changed" })
  dateStageChanged?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expected_revenue" })
  expectedRevenue?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=interaction_count" })
  interactionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=last_activity_at" })
  lastActivityAt?: string;

  @SpeakeasyMetadata({ data: "json, name=lead_id" })
  leadId?: string;

  @SpeakeasyMetadata({ data: "json, name=lead_source" })
  leadSource?: string;

  @SpeakeasyMetadata({ data: "json, name=loss_reason" })
  lossReason?: string;

  @SpeakeasyMetadata({ data: "json, name=loss_reason_id" })
  lossReasonId?: string;

  @SpeakeasyMetadata({ data: "json, name=monetary_amount" })
  monetaryAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=pipeline_id" })
  pipelineId?: string;

  @SpeakeasyMetadata({ data: "json, name=pipeline_stage_id" })
  pipelineStageId?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_contact_id" })
  primaryContactId: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=stage_last_changed_at" })
  stageLastChangedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=status_id" })
  statusId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=win_probability" })
  winProbability?: number;

  @SpeakeasyMetadata({ data: "json, name=won_reason" })
  wonReason?: string;

  @SpeakeasyMetadata({ data: "json, name=won_reason_id" })
  wonReasonId?: string;
}
