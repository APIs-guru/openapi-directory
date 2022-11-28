import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Note extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=company_id" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_id" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lead_id" })
  leadId?: string;

  @SpeakeasyMetadata({ data: "json, name=opportunity_id" })
  opportunityId?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}


export class NoteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=company_id" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_id" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=lead_id" })
  leadId?: string;

  @SpeakeasyMetadata({ data: "json, name=opportunity_id" })
  opportunityId?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
