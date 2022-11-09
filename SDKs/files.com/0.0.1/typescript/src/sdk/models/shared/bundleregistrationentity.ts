import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BundleRegistrationEntity
/** 
 * List Bundle Registrations
**/
export class BundleRegistrationEntity extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=inbox_code" })
  inboxCode?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
