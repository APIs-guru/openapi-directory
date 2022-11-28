import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ValidationErrorMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=error_text" })
  errorText?: string;
}
