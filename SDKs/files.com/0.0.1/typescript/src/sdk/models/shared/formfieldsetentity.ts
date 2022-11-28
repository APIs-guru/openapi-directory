import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormFieldEntity } from "./formfieldentity";



// FormFieldSetEntity
/** 
 * Create Form Field Set
**/
export class FormFieldSetEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=form_fields" })
  formFields?: FormFieldEntity;

  @SpeakeasyMetadata({ data: "json, name=form_layout" })
  formLayout?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=skip_company" })
  skipCompany?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skip_email" })
  skipEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skip_name" })
  skipName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
