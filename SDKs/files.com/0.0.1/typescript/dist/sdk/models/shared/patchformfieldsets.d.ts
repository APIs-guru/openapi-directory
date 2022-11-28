import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchFormFieldSetsFormFields extends SpeakeasyBase {
    defaultOption?: string;
    fieldType?: string;
    helpText?: string;
    id?: number;
    label?: string;
    optionsForSelect?: string;
    required?: boolean;
}
/**
 * Update Form Field Set
**/
export declare class PatchFormFieldSets extends SpeakeasyBase {
    formFields?: PatchFormFieldSetsFormFields[];
    skipCompany?: boolean;
    skipEmail?: boolean;
    skipName?: boolean;
    title?: string;
}
