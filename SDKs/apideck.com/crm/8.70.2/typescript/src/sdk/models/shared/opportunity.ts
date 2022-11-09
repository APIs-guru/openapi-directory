import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CurrencyEnum } from "./currencyenum";
import { CustomField } from "./customfield";


export class Opportunity extends SpeakeasyBase {
  @Metadata({ data: "json, name=close_date" })
  closeDate?: Date;

  @Metadata({ data: "json, name=company_id" })
  companyId?: string;

  @Metadata({ data: "json, name=company_name" })
  companyName?: string;

  @Metadata({ data: "json, name=contact_id" })
  contactId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=custom_fields", elemType: shared.CustomField })
  customFields?: CustomField[];

  @Metadata({ data: "json, name=date_last_contacted" })
  dateLastContacted?: Date;

  @Metadata({ data: "json, name=date_lead_created" })
  dateLeadCreated?: Date;

  @Metadata({ data: "json, name=date_stage_changed" })
  dateStageChanged?: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expected_revenue" })
  expectedRevenue?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=interaction_count" })
  interactionCount?: number;

  @Metadata({ data: "json, name=last_activity_at" })
  lastActivityAt?: string;

  @Metadata({ data: "json, name=lead_id" })
  leadId?: string;

  @Metadata({ data: "json, name=lead_source" })
  leadSource?: string;

  @Metadata({ data: "json, name=loss_reason" })
  lossReason?: string;

  @Metadata({ data: "json, name=loss_reason_id" })
  lossReasonId?: string;

  @Metadata({ data: "json, name=monetary_amount" })
  monetaryAmount?: number;

  @Metadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @Metadata({ data: "json, name=pipeline_id" })
  pipelineId?: string;

  @Metadata({ data: "json, name=pipeline_stage_id" })
  pipelineStageId?: string;

  @Metadata({ data: "json, name=primary_contact_id" })
  primaryContactId: string;

  @Metadata({ data: "json, name=priority" })
  priority?: string;

  @Metadata({ data: "json, name=source_id" })
  sourceId?: string;

  @Metadata({ data: "json, name=stage_last_changed_at" })
  stageLastChangedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=status_id" })
  statusId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @Metadata({ data: "json, name=win_probability" })
  winProbability?: number;

  @Metadata({ data: "json, name=won_reason" })
  wonReason?: string;

  @Metadata({ data: "json, name=won_reason_id" })
  wonReasonId?: string;
}
