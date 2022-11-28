import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostFormFieldSetsFormFields extends SpeakeasyBase {
    defaultOption?: string;
    fieldType?: string;
    helpText?: string;
    id?: number;
    label?: string;
    optionsForSelect?: string;
    required?: boolean;
}
/**
 * Create Form Field Set
**/
export declare class PostFormFieldSets extends SpeakeasyBase {
    formFields?: PostFormFieldSetsFormFields[];
    skipCompany?: boolean;
    skipEmail?: boolean;
    skipName?: boolean;
    title?: string;
    userId?: number;
}
