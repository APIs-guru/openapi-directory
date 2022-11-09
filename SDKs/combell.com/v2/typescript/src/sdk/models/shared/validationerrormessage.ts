import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ValidationErrorMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=error_code" })
  errorCode?: string;

  @Metadata({ data: "json, name=error_text" })
  errorText?: string;
}
