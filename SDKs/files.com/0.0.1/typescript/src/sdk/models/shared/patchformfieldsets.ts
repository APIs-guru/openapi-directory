import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchFormFieldSetsFormFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default_option" })
  defaultOption?: string;

  @SpeakeasyMetadata({ data: "json, name=field_type" })
  fieldType?: string;

  @SpeakeasyMetadata({ data: "json, name=help_text" })
  helpText?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=options_for_select" })
  optionsForSelect?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}


// PatchFormFieldSets
/** 
 * Update Form Field Set
**/
export class PatchFormFieldSets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=form_fields", elemType: PatchFormFieldSetsFormFields })
  formFields?: PatchFormFieldSetsFormFields[];

  @SpeakeasyMetadata({ data: "json, name=skip_company" })
  skipCompany?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skip_email" })
  skipEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skip_name" })
  skipName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
