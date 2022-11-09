import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FormFieldEntity } from "./formfieldentity";


// FormFieldSetEntity
/** 
 * Create Form Field Set
**/
export class FormFieldSetEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=form_fields" })
  formFields?: FormFieldEntity;

  @Metadata({ data: "json, name=form_layout" })
  formLayout?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=skip_company" })
  skipCompany?: boolean;

  @Metadata({ data: "json, name=skip_email" })
  skipEmail?: boolean;

  @Metadata({ data: "json, name=skip_name" })
  skipName?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
