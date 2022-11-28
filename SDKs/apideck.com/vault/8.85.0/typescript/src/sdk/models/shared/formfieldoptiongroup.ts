import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleFormFieldOption } from "./simpleformfieldoption";



export class FormFieldOptionGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: SimpleFormFieldOption })
  options?: SimpleFormFieldOption[];
}
