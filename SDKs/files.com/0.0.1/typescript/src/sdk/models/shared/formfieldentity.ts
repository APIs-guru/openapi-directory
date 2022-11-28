import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FormFieldEntityFieldTypeEnum {
    Text = "text",
    TextArea = "text_area",
    Dropdown = "dropdown",
    Radio = "radio"
}


export class FormFieldEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default_option" })
  defaultOption?: string;

  @SpeakeasyMetadata({ data: "json, name=field_type" })
  fieldType?: FormFieldEntityFieldTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=form_field_set_id" })
  formFieldSetId?: number;

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
