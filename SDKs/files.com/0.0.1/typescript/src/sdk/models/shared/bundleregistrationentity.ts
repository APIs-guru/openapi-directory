import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BundleRegistrationEntity
/** 
 * List Bundle Registrations
**/
export class BundleRegistrationEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickwrap_body" })
  clickwrapBody?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=form_field_data" })
  formFieldData?: string;

  @SpeakeasyMetadata({ data: "json, name=form_field_set_id" })
  formFieldSetId?: number;

  @SpeakeasyMetadata({ data: "json, name=inbox_code" })
  inboxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
