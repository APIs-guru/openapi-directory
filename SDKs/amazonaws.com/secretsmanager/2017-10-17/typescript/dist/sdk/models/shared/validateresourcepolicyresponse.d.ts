import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ValidationErrorsEntry } from "./validationerrorsentry";
export declare class ValidateResourcePolicyResponse extends SpeakeasyBase {
    policyValidationPassed?: boolean;
    validationErrors?: ValidationErrorsEntry[];
}
