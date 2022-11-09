import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimpleFormFieldOption } from "./simpleformfieldoption";


export class FormFieldOptionGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=options", elemType: shared.SimpleFormFieldOption })
  options?: SimpleFormFieldOption[];
}
