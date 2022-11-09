import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LeadFormSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=capture_form_enabled" })
  captureFormEnabled?: boolean;

  @Metadata({ data: "json, name=first_name_field_enabled" })
  firstNameFieldEnabled?: boolean;

  @Metadata({ data: "json, name=first_name_field_required" })
  firstNameFieldRequired?: boolean;

  @Metadata({ data: "json, name=integration_enabled" })
  integrationEnabled?: boolean;

  @Metadata({ data: "json, name=last_name_field_enabled" })
  lastNameFieldEnabled?: boolean;

  @Metadata({ data: "json, name=last_name_field_required" })
  lastNameFieldRequired?: boolean;

  @Metadata({ data: "json, name=telephone_field_enabled" })
  telephoneFieldEnabled?: boolean;

  @Metadata({ data: "json, name=telephone_field_required" })
  telephoneFieldRequired?: boolean;

  @Metadata({ data: "json, name=work_email_validation" })
  workEmailValidation?: boolean;
}
