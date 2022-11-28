import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationErrorMessage } from "./validationerrormessage";



export class BadRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=validation_errors", elemType: ValidationErrorMessage })
  validationErrors?: ValidationErrorMessage[];
}
