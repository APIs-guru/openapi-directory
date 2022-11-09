import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValidationError } from "./validationerror";


export class HttpValidationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail", elemType: shared.ValidationError })
  detail?: ValidationError[];
}
