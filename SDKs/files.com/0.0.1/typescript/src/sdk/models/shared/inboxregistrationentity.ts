import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InboxRegistrationEntity
/** 
 * List Inbox Registrations
**/
export class InboxRegistrationEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=clickwrap_body" })
  clickwrapBody?: string;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=company" })
  company?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=form_field_data" })
  formFieldData?: string;

  @Metadata({ data: "json, name=form_field_set_id" })
  formFieldSetId?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
