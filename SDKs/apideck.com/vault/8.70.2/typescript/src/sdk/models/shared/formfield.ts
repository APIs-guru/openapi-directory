import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleFormFieldOption } from "./simpleformfieldoption";
import { FormFieldOptionGroup } from "./formfieldoptiongroup";


export class FormField extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_custom_values" })
  allowCustomValues?: boolean;

  @Metadata({ data: "json, name=custom_field" })
  customField?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=options" })
  options?: any[];

  @Metadata({ data: "json, name=placeholder" })
  placeholder?: string;

  @Metadata({ data: "json, name=required" })
  required?: boolean;

  @Metadata({ data: "json, name=sensitive" })
  sensitive?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: any;
}
