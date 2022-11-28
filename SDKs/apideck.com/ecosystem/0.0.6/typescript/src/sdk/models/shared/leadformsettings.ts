import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LeadFormSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capture_form_enabled" })
  captureFormEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=first_name_field_enabled" })
  firstNameFieldEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=first_name_field_required" })
  firstNameFieldRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=integration_enabled" })
  integrationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_name_field_enabled" })
  lastNameFieldEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_name_field_required" })
  lastNameFieldRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=telephone_field_enabled" })
  telephoneFieldEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=telephone_field_required" })
  telephoneFieldRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=work_email_validation" })
  workEmailValidation?: boolean;
}
