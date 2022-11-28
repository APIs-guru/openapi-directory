import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationErrorMessage } from "./validationerrormessage";
export declare class BadRequestResponse extends SpeakeasyBase {
    validationErrors?: ValidationErrorMessage[];
}
