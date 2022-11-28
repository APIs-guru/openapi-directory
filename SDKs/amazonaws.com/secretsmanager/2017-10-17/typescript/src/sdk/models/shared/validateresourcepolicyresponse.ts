import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationErrorsEntry } from "./validationerrorsentry";



export class ValidateResourcePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyValidationPassed" })
  policyValidationPassed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationErrorsEntry })
  validationErrors?: ValidationErrorsEntry[];
}
