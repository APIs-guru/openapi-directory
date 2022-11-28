import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleFormFieldOption } from "./simpleformfieldoption";
import { FormFieldOptionGroup } from "./formfieldoptiongroup";



export class FormField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_custom_values" })
  allowCustomValues?: boolean;

  @SpeakeasyMetadata({ data: "json, name=custom_field" })
  customField?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: any[];

  @SpeakeasyMetadata({ data: "json, name=placeholder" })
  placeholder?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sensitive" })
  sensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: any;
}
