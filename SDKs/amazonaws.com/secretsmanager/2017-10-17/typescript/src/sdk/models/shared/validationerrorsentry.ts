import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValidationErrorsEntry
/** 
 * Displays errors that occurred during validation of the resource policy.
**/
export class ValidationErrorsEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=CheckName" })
  checkName?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
