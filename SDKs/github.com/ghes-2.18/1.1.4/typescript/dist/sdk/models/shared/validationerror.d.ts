import { SpeakeasyBase } from "../../../internal/utils";
export declare class ValidationErrorErrors extends SpeakeasyBase {
    code: string;
    field?: string;
    index?: number;
    message?: string;
    resource?: string;
    value?: any;
}
/**
 * Validation Error
**/
export declare class ValidationError extends SpeakeasyBase {
    documentationUrl: string;
    errors?: ValidationErrorErrors[];
    message: string;
}
