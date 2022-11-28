import { SpeakeasyBase } from "../../../internal/utils";
import { EmailTemplateMetadata } from "./emailtemplatemetadata";
/**
 * The following elements are returned by the service.
**/
export declare class ListEmailTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    templatesMetadata?: EmailTemplateMetadata[];
}
