import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about a specific version of a message template.
**/
export declare class TemplateVersionResponse extends SpeakeasyBase {
    creationDate: string;
    defaultSubstitutions?: string;
    lastModifiedDate: string;
    templateDescription?: string;
    templateName: string;
    templateType: string;
    version?: string;
}
