import { SpeakeasyBase } from "../../../internal/utils";
import { FormFieldEntity } from "./formfieldentity";
/**
 * Create Form Field Set
**/
export declare class FormFieldSetEntity extends SpeakeasyBase {
    formFields?: FormFieldEntity;
    formLayout?: number;
    id?: number;
    skipCompany?: boolean;
    skipEmail?: boolean;
    skipName?: boolean;
    title?: string;
}
