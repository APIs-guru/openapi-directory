import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidationErrorsEntry
/** 
 * Displays errors that occurred during validation of the resource policy.
**/
export class ValidationErrorsEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CheckName" })
  checkName?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
