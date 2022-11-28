import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateTypeEnum } from "./templatetypeenum";
/**
 * Provides information about a message template that's associated with your Amazon Pinpoint account.
**/
export declare class TemplateResponse extends SpeakeasyBase {
    arn?: string;
    creationDate: string;
    defaultSubstitutions?: string;
    lastModifiedDate: string;
    templateDescription?: string;
    templateName: string;
    templateType: TemplateTypeEnum;
    version?: string;
    tags?: Map<string, string>;
}
