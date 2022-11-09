import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Note extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=company_id" })
  companyId?: string;

  @Metadata({ data: "json, name=contact_id" })
  contactId?: string;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lead_id" })
  leadId?: string;

  @Metadata({ data: "json, name=opportunity_id" })
  opportunityId?: string;

  @Metadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
