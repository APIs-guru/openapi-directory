import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValidationErrorMessage } from "./validationerrormessage";


export class BadRequestResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=validation_errors", elemType: shared.ValidationErrorMessage })
  validationErrors?: ValidationErrorMessage[];
}
