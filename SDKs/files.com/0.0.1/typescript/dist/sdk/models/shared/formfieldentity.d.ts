import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FormFieldEntityFieldTypeEnum {
    Text = "text",
    TextArea = "text_area",
    Dropdown = "dropdown",
    Radio = "radio"
}
export declare class FormFieldEntity extends SpeakeasyBase {
    defaultOption?: string;
    fieldType?: FormFieldEntityFieldTypeEnum;
    formFieldSetId?: number;
    helpText?: string;
    id?: number;
    label?: string;
    optionsForSelect?: string;
    required?: boolean;
}
