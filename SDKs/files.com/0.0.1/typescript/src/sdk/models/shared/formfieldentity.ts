import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FormFieldEntityFieldTypeEnum {
    Text = "text"
,    TextArea = "text_area"
,    Dropdown = "dropdown"
,    Radio = "radio"
}


export class FormFieldEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=default_option" })
  defaultOption?: string;

  @Metadata({ data: "json, name=field_type" })
  fieldType?: FormFieldEntityFieldTypeEnum;

  @Metadata({ data: "json, name=form_field_set_id" })
  formFieldSetId?: number;

  @Metadata({ data: "json, name=help_text" })
  helpText?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=options_for_select" })
  optionsForSelect?: string;

  @Metadata({ data: "json, name=required" })
  required?: boolean;
}
