import { SpeakeasyBase } from "../../../internal/utils";
import { InAppMessageContent } from "./inappmessagecontent";
import { LayoutEnum } from "./layoutenum";
import { TemplateTypeEnum } from "./templatetypeenum";
/**
 * In-App Template Response.
**/
export declare class InAppTemplateResponse extends SpeakeasyBase {
    arn?: string;
    content?: InAppMessageContent[];
    creationDate: string;
    customConfig?: Map<string, string>;
    lastModifiedDate: string;
    layout?: LayoutEnum;
    templateDescription?: string;
    templateName: string;
    templateType: TemplateTypeEnum;
    version?: string;
    tags?: Map<string, string>;
}
