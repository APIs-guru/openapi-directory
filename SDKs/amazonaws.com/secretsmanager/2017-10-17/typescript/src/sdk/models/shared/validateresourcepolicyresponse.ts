import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValidationErrorsEntry } from "./validationerrorsentry";


export class ValidateResourcePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyValidationPassed" })
  policyValidationPassed?: boolean;

  @Metadata({ data: "json, name=ValidationErrors", elemType: shared.ValidationErrorsEntry })
  validationErrors?: ValidationErrorsEntry[];
}
